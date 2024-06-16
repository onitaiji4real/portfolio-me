import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <div className=" rounded-full bg-teal-500 size-16 flex justify-center items-center overflow-hidden">
        <Link href={"/demo-gif/home"}>
          <FaHome className="size-10" />
        </Link>
      </div>
    </>
  );
}
