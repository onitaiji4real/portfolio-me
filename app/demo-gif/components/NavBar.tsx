"use client";
import React from "react";
import { FaBell, FaChevronLeft } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import UserPhoto from "./UserPhoto";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const handleBack = () => router.back();
  return (
    <div className=" max-w-md mx-auto p-4 bg-teal-500 h-[30%] text-white">
      <div className="flex justify-between items-center">
        <FaChevronLeft onClick={handleBack} />

        <div className="flex justify-around items-center gap-5">
          {/* 三個icon */}
          <FaBell />
          <RxExit />
          <UserPhoto />
        </div>
      </div>

      {/* 下半邊 */}

      {/* <SearchBar />
      <div className="bg-gray-300 rounded p-2">
        {records.map((record) => (
          <RecordCard key={record.id} record={record} />
        ))}
      </div>
      <HomeButton /> */}
    </div>
  );
}
