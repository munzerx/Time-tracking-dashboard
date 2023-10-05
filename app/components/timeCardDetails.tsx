import React from "react";

export default function timeCardDetails(props: {
  catagory: string;
  current: number;
  previous: number;
}) {
  return (
    <div className="relative flex flex-row justify-between bg-blue-dark p-8 capitalize rounded-xl w-[100%]">
      <section className="flex flex-col gap-2 text-center">
        <p className="font-bold">exercise</p>
        <p className="text-4xl font-light">{props.current}hrs</p>
      </section>
      <section className="text-grey flex flex-col gap-4 text-center">
        <p className="text-right">...</p>
        <p>last week - {props.previous}hrs</p>
      </section>
    </div>
  );
}
