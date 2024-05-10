"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Link, Element } from "react-scroll";

export default function Title({
  text,
  underLineRotate,
  className,
}: {
  text: string;
  underLineRotate: false | "left" | "right";
  className?: string;
}) {
  return (
    <>
      <Link
        to={`${text}.Anchor`}
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        <div className={className}>
          <h2 className=" flex justify-center items-center text-3xl font-bold group-hover:text-green-400 transition-all">
            {text}
          </h2>

          {underLineRotate ? (
            underLineRotate === "left" ? (
              <div className="flex flex-col items-center justify-center -rotate-6">
                <div className=" w-40 h-2 bg-green-500 rounded-full"></div>
                <div className=" w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rotate-6">
                <div className=" w-40 h-2 bg-green-500 rounded-full"></div>
                <div className=" w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className=" w-40 h-2 bg-green-500 rounded-full"></div>
              <div className=" w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
            </div>
          )}
        </div>
        <Element name={`${text}.Anchor`} />
      </Link>
    </>
  );
}
