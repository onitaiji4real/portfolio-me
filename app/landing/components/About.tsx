import Title from "@/app/(home)/components/Title";
import React from "react";

export default function About() {
  return (
    <>
      <div className=" flex justify-center items-center">
        <Title text="About 🔍" underLineRotate={"right"} />
      </div>

      <div className=" flex flex-col items-center justify-center gap-5">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </>
  );
}
