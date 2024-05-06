import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import Title from "./Title";
import IntroduceCard from "@/components/IntroduceCard";

export default function HeroSection() {
  const mail = "minecraft8810@gmail.com";
  return (
    <div className=" min-h-[75vh] flex flex-col-reverse gap:14 lg:gap-10 lg:flex-row items-center justify-between animate-move-up">
      <IntroduceCard />
      <div className=" relative py-20">
        <div className="  w-72 h-72  space-y-3 -rotate-[30deg] relative">
          <div className=" flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className=" flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-xl bg-indigo-500"></div>
            <div className="w-32 h-32  rounded-full bg-green-500"></div>
          </div>
          <div className=" glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className=" absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn
            borderRadius="0.5rem"
            className="p-3 font-semibold cursor-default"
          >
            <p>📢 Available for work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}

{
  /*  */
}
