"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.Js",
      Icon: SiNextdotjs,
    },
    {
      text: "Java",
      Icon: FaJava,
    },
    {
      text: "MySQL",
      Icon: SiMysql,
    },
    {
      text: "PHP",
      Icon: SiPhp,
    },
  ];
  return (
    <div className=" max-w-5xl mx-auto px-8 animate-move-up ">
      <Title
        text="Skills 🛠️"
        className="flex flex-col items-center justify-center -rotate-6 "
      />
      <HoverEffect items={skills} className="cursor-default" />
    </div>
  );
}
