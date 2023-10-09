import React from "react";
import Image from "next/image";


import exercise from "@/public/icon-exercise.svg";
import play from "@/public/icon-play.svg";
import selfCare from "@/public/icon-self-care.svg";
import social from "@/public/icon-social.svg";
import study from "@/public/icon-study.svg";
import work from "@/public/icon-work.svg";

export default function timeCard(props: {
  title: string;
  bg_color: string;
  current: number;
  previous: number;
}) {
  let picture =
    props.title === "Work"
      ? work
      : props.title === "Play"
      ? play
      : props.title === "Study"
      ? study
      : props.title === "Exercise"
      ? exercise
      : props.title === "Social"
      ? social
      : props.title === "Self Care"
      ? selfCare
      : play;
  return (
    <div
      className={` ${props.bg_color} relative pt-12 flex flex-row gap-4 items-center rounded-xl w-[90vw] md:w-auto md:h-full md:col-span-1 md:row-span-1`}
    >
      <Image src={picture} alt="" className="absolute top-0 right-0" />
      <div className="relative flex flex-row justify-between bg-blue-dark p-8 capitalize rounded-xl w-[100%] cursor-pointer  md:hover:bg-blue-hover md:flex-col md:text-left md:h-full">
        <section className="flex flex-col gap-2 text-left">
          <p className="font-bold">{props.title}</p>
          <p className="text-4xl font-light">{props.current}hrs</p>
        </section>
        <section className="text-grey flex flex-col gap-4 text-center md:text-left">
          <p className="text-right md:hidden">...</p>
          <p>last week - {props.previous}hrs</p>
        </section>
      </div>
    </div>
  );
}
