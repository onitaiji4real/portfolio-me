"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Link, Element } from "react-scroll";
import {
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Skills({ className }: { className?: string }) {
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
    <>
      <div className={cn("max-w-5xl mx-auto px-8 animate-move-up", className)}>
        <Title text="Skills 🛠️" underLineRotate={"left"} />
        <HoverEffect items={skills} className="cursor-default" />
      </div>
    </>
  );
}
