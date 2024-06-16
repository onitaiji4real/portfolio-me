// src/RecordList.js
import React from "react";
import SearchBar from "./SearchBar";
import HomeButton from "./HomeButton";
import Record from "./Record";
import {
  FaChevronLeft,
  FaBell,
  FaLongArrowAltUp,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import UserPhoto from "./UserPhoto";
import NavBar from "./NavBar";

const records = [
  { id: 1, name: "白蝦池", batch: "第 4 批次" },
  { id: 3, name: "龍膽石斑魚池", batch: "第 3 批次" },
  { id: 4, name: "白蝦池", batch: "第 4 批次" },
];

const RecordList = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen relative">
        <FaArrowUp className="absolute right-4 top-28 size-5" />
        <Record />
        <FaArrowDown className="absolute right-4 top-[800px] size-5" />
      </div>
    </>
  );
};

export default RecordList;
