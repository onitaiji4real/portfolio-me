"use client";
import React, { useEffect } from "react";
import Navbar from "../(home)/components/Navbar";
import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import TheHeader from "@/components/Layout/TheHeader";
import useSWR from "swr";
import axios from "axios";
import { issueFetcher } from "@/lib/utils/fetcher";
import CardBox from "@/components/CardBox";
import { Card } from "@/components/ui/card";
import Footer from "../(home)/components/Footer";

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
      <MaxWidthWrapper>
        <TheHeader />
        {/* <div className="h-10 xl:h-32  bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div> */}
        <div className="flex justify-end items-start min-h-[75vh]">
          <CardBox />
        </div>
        <Footer />
      </MaxWidthWrapper>
    </>
  );
}
