"use client";
import { useState } from "react";

import PersonalCard from "../app/components/personalCard";
import TimeCard from "./components/timeCard";

import hoursData from "@/public/data.json";

export default function Home() {
  const [catagorySelected, setCatagorySelected] = useState("daily");

  return (
    <main className="bg-blue-darker flex flex-col w-screen px-1 py-20 gap-4 text-white items-center md:h-screen md:justify-center">
      <div className="flex flex-col gap-4 items-center md:grid md:grid-cols-4 md:grid-rows-2 md:w-[50%] md:h-[60%]">
        <div className="bg-blue-dark rounded-xl md:col-span-1 md:row-span-2 md:h-full">
          <PersonalCard />
          <section className="flex flex-row justify-around text-center py-6 capitalize text-blue-desaturated md:flex-col md:text-left md:px-6 md:justify-between md:cursor-pointer md:h-1/3 ">
            {["daily", "weekly", "monthly"].map((category) => (
              <p
                key={category}
                onClick={() => setCatagorySelected(category)}
                className={` hover:text-white ${
                  catagorySelected === category
                    ? "text-white"
                    : "text-blue-desaturated"
                }`}
              >
                {category}
              </p>
            ))}
          </section>
        </div>

        {/* <TimeCard bg_color="bg-lime" catagory="work" current={21} previous={20} /> */}
        {hoursData.map((title) => (
          <TimeCard
            key={title.title}
            title={title.title}
            current={title.timeframes[catagorySelected].current}
            previous={title.timeframes[catagorySelected].previous}
            bg_color={
              title.title == "Work"
                ? "bg-red-work"
                : title.title == "Play"
                ? "bg-blue-soft"
                : title.title == "Study"
                ? "bg-red-study"
                : title.title == "Exercise"
                ? "bg-lime"
                : title.title == "Social"
                ? "bg-violet"
                : title.title == "Self Care"
                ? "bg-orange"
                : "bg-white"
            }
          />
        ))}
      </div>
    </main>
  );
}
