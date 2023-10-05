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
  bg_color: string;
  catagory: string;
  current: number;
  previous: number;
}) {
  return (
    <div
      className={` ${props.bg_color} relative pt-10 flex flex-row gap-4 items-center rounded-xl w-[90vw]`}
    >
      <Image src={exercise} alt="" className="absolute top-0 right-0" />
      {<Details catagory={props.catagory} current={props.current} previous={props.previous} />}
    </div>
  );
}
