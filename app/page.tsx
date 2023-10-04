"use client";
import { useState } from "react";

import PersonalCard from "../app/components/personalCard";
import TimeCard from "./components/timeCard";

export default function Home() {
  const [catagorySelected, setCatagorySelected] = useState("daily");

  return (
    <main className="bg-blue-darker w-screen h-screen flex flex-col px-1 py-20 gap-4 text-white items-center">
      <div className="relative bg-blue-dark rounded-xl">
        <PersonalCard />
        <section className="flex flex-row justify-around text-center py-6 text-blue-desaturated capitalize
        
        ">
          <p>daily</p>
          <p>weekly</p>
          <p>monthly</p>
        </section>
      </div>

      <TimeCard />
    </main>
  );
}
