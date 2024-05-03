import React from "react";
import Navbar from "../(home)/components/Navbar";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import TheHeader from "@/components/Layout/TheHeader";

export default function page() {
  return (
    <>
      <TheHeader />
      <div className="h-10 xl:h-32  bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
    </>
  );
}
