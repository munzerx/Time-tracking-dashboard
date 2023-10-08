import React from "react";
import Image from "next/image";

import Details from "./timeCardDetails";
import ellipsis from "@/public/icon-ellipsis.svg";
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
  let picture = props.title === "Work" ? work :
  props.title === "Play" ? play :
  props.title === "Study" ? study :
  props.title === "Exercise" ? exercise :
  props.title === "Social" ? social :
  props.title === "Self Care" ? selfCare : play
  ;

  return (
    <div
      className={` ${props.bg_color} relative pt-10 flex flex-row gap-4 items-center rounded-xl w-[90vw]`}
    >
      <Image src={picture} alt="" className="absolute top-0 right-0" />
      {
        <Details
          key={props.title}
          title={props.title}
          current={props.current}
          previous={props.previous}
        />
      }
    </div>
  );
}
