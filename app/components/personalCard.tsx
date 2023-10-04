import React from "react";
import Image from "next/image";

import jeremy from "@/public/image-jeremy.png";

export default function personalCard() {
  return (
    <div className="flex flex-row gap-4 items-center bg-blue-primary py-9 px-16 rounded-xl">
      <div className="bg-white rounded-full p-0.5">
        <Image src={jeremy} width={55} alt="my image" placeholder="blur"/>
      </div>
      <section>
        <p className="text-grey text-xs">Report for</p>
        <p className="text-lg capitalize font-light">jeremy robson</p>
      </section>
    </div>
  );
}
