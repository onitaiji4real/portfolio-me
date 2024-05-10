import React from "react";

export default function TextWithUnderLine({ text }: { text: string }) {
  return (
    <>
      <div className="flex-col justify-start items-start">
        <h2 className=" flex justify-center items-center text-3xl font-bold group-hover:text-green-400 transition-all">
          {text}
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className=" w-40 h-2 bg-green-500 rounded-full"></div>
          <div className=" w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
        </div>
      </div>
    </>
  );
}
