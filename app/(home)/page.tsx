import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import MaxWithWrapper from "@/components/Layout/MaxWidthWrapper";
import GridAndDotBackground from "@/components/ui/grid-and-dot-background";
import TheHeader from "@/components/Layout/TheHeader";

const page = () => {
  return (
    <>
      <GridAndDotBackground>
        <div className=" max-w-7xl mx-auto p-5 ">
          <TheHeader />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32  bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </GridAndDotBackground>
      <div className=" max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Project />
        <Footer />
      </div>
    </>
  );
};

export default page;
