"use client";
import React, { useEffect } from "react";
import Navbar from "../(home)/components/Navbar";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import TheHeader from "@/components/Layout/TheHeader";
import useSWR from "swr";
import axios from "axios";
import { issueFetcher } from "@/lib/utils/fetcher";
import GridAndDotBackground from "@/components/ui/grid-and-dot-background";
import HeroSection from "../(home)/components/HeroSection";
import IntroduceCard from "@/components/IntroduceCard";
import { GithubGlobeModal } from "./components/GithubGlobeModal";

export default function Page() {
  interface Issue {
    id: number;
    title: string;
    body: string;
  }

  const url = "https://api.github.com/repos/onitaiji4real/blog-pages-db/issues";

  const { data, error, isLoading } = useSWR<Issue[]>(url, issueFetcher);

  return (
    <>
      <GridAndDotBackground>
        <div className=" max-w-7xl mx-auto p-5 ">
          <TheHeader />
          <div className=" flex justify-center items-center text-3xl">
            GLOBE PAGE
          </div>
          <div className=" flex justify-between items-center">
            <IntroduceCard />
            <div className=" size-100">
              <GithubGlobeModal />
            </div>
          </div>
        </div>
        <div className="h-10 xl:h-32  bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </GridAndDotBackground>
    </>
  );
}
