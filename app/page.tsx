"use client";
import { useState} from "react";

import PersonalCard from "../app/components/personalCard";
import TimeCard from "./components/timeCard";

import hoursData from "@/public/data.json";

export default function Home() {
  const [catagorySelected, setCatagorySelected] = useState("daily");

  return (
    <main className="bg-blue-darker w-screen flex flex-col px-1 py-20 gap-4 text-white items-center">
      <div className="bg-blue-dark rounded-xl">
        <PersonalCard />
        <section className="flex flex-row justify-around text-center py-6 capitalize text-blue-desaturated ">
          <p
            onClick={() => setCatagorySelected("daily")}
            className={`${
              catagorySelected === "daily"
                ? "text-white"
                : "text-blue-desaturated "
            }`}
          >
            daily
          </p>

          <p
            onClick={() => setCatagorySelected("weekly")}
            className={`${
              catagorySelected === "weekly"
                ? "text-white"
                : "text-blue-desaturated "
            }`}
          >
            weekly
          </p>

          <p
            onClick={() => setCatagorySelected("monthly")}
            className={`${
              catagorySelected === "monthly"
                ? "text-white"
                : "text-blue-desaturated "
            }`}
          >
            monthly
          </p>
        </section>
      </div>

      {/* <TimeCard bg_color="bg-lime" catagory="work" current={21} previous={20} /> */}

      {hoursData.map((title) => (
        <TimeCard
          key={title.title}
          title={title.title}
          current={title.timeframes[catagorySelected].current}
          previous={title.timeframes[catagorySelected].previous}
          bg_color={title.title == "Work" ? "bg-red-work" : 
          title.title == "Play" ? "bg-blue-soft" :
          title.title == "Study" ? "bg-red-study" :
          title.title == "Exercise" ? "bg-lime" :
          title.title == "Social" ? "bg-violet" :
          title.title == "Self Care" ? "bg-orange" : "bg-white"
        }
          
        />
      ))}
    </main>
  );
}
