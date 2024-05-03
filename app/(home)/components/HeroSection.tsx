import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import Title from "./Title";

export default function HeroSection() {
  const mail = "minecraft8810@gmail.com";
  return (
    <div className=" min-h-[60vh] flex flex-col-reverse gap:14 lg:gap-10 lg:flex-row items-center justify-between animate-move-up">
      <div className=" space-y-10">
        <h1 className=" text-4xl lg:text-7xl font-bold text-center lg:text-left">
          Nice to meet you! 🤚
          <br />{" "}
          <span className=" underline underline-offset-8 decoration-green-500">
            {" "}
            {"I'm AngusChen."}
          </span>
        </h1>
        <p className=" md:w-96 text-lg text-gray-300">
          {
            "Based in Taiwan, I'm a Fullstack developer passionate about building a modern web application that users love."
          }
        </p>
        <Link href={`mailto:${mail}`} className=" inline-block group">
          <Title text="Contact me 📬" />
        </Link>
      </div>
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
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold ">
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
