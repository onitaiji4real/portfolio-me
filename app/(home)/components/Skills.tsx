"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SiReact } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "React",
      Icon: SiReact,
    },
  ];
  return (
    <div className=" max-w-5xl mx-auto px-8 animate-move-up">
      <Title
        text="Skills 🛠️"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
