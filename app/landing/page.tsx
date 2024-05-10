"use client";
import React from "react";
import GridAndDotBackground from "@/components/ui/grid-and-dot-background";
import Skills from "../(home)/components/Skills";
import About from "./components/About";
import TheHeader from "@/components/Layout/TheHeader";
import IntroduceCard from "@/components/IntroduceCard";

export default function Page() {
  interface Issue {
    id: number;
    title: string;
    body: string;
  }
  // const url = "https://api.github.com/repos/onitaiji4real/blog-pages-db/issues";
  // const { data, error, isLoading } = useSWR<Issue[]>(url, issueFetcher);
  return (
    <>
      <GridAndDotBackground className=" min-h-[90vh]">
        <div className=" max-w-7xl mx-auto p-5 ">
          <TheHeader />
          <div className=" flex justify-center items-center text-3xl">
            Landing PAGE
          </div>
          <div className=" pt-52 flex justify-between items-center">
            <IntroduceCard />
          </div>
        </div>
      </GridAndDotBackground>
      <Skills />
      <About />
    </>
  );
}
