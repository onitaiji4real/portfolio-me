import Title from "@/app/(home)/components/Title";
import Link from "next/link";
import React from "react";
import TextWithUnderLine from "./TextWithUnderLine";

export default function IntroduceCard() {
  const mail = "minecraft8810@gmail.com";
  return (
    <>
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
        {/* <Link href={`mailto:${mail}`} className=" inline-block group"> */}
        {/* <Title text="Contact me 📬" underLineRotate={false} /> */}
        {/* </Link> */}
        <div className=" flex justify-start items-center">
          <Link href={`mailto:${mail}`} className=" inline-block group">
            <TextWithUnderLine text="Contact me 📬" />
          </Link>
        </div>
      </div>
    </>
  );
}
