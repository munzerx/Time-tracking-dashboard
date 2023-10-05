"use client";
import { useState, useEffect } from "react";

import PersonalCard from "../app/components/personalCard";
import TimeCard from "./components/timeCard";

import hoursData from "@/public/data.json";

export default function Home() {
  const [catagorySelected, setCatagorySelected] = useState("daily");

  const [catagory, setCatagory] = useState("");
  const [bg_colr, setBg_color] = useState("");
  const [current, setCurrent] = useState<number>();
  const [previous, setPrevious] = useState<number>();

  useEffect(() => {

    hoursData.map((title) => {
      switch (title.title) {
        case "Work":
          setBg_color("bg-red-work");
          setCatagory("work");
          break;

        case "Play":
          setBg_color("bg-blue-soft");
          setCatagory("play");
          break;

        case "Study":
          setBg_color("bg-red-study");
          setCatagory("study");
          break;

        case "Exercise":
          setBg_color("bg-lime");
          setCatagory("exercise");
          break;

        case "Social":
          setBg_color("bg-violet");
          setCatagory("social");
          break;

        case "Self Care":
          setBg_color("bg-orange");
          setCatagory("selfCare");
          // bg_color = "bg-orange";
          // catagory = "selfCare";
          break;
      }
      console.log("ran");

      if (catagorySelected == "daily") {
        setCurrent(title.timeframes.daily.current);
        setPrevious(title.timeframes.daily.previous);
      } else if (catagorySelected == "weekly") {
        setCurrent(title.timeframes.weekly.current);
        setPrevious(title.timeframes.weekly.previous);
      } else {
        setCurrent(title.timeframes.monthly.current);
        setPrevious(title.timeframes.monthly.previous);
      }

    });
  }, [catagorySelected]);

  

  return (
    <main className="bg-blue-darker w-screen h-screen flex flex-col px-1 py-20 gap-4 text-white items-center">
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
    </main>
  );
}
