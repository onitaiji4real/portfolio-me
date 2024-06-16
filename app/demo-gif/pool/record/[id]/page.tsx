"use client";
import NavBar from "@/app/demo-gif/components/NavBar";
import { SelectUI } from "@/app/demo-gif/components/SelectUI";
import { DatePicker } from "@/app/demo-gif/ui/DatePicker";
import Home from "@/app/demo-gif/ui/Home";
import { Divide } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import { FaArrowDown, FaArrowUp, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TbTilde } from "react-icons/tb";

const RecordPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const { id } = params;
  const poolId = searchParams.get("id");
  const title = searchParams.get("title");

  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // 加 1 並補零
  const startDay = "01"; // 當月的第一天
  const endDay = "30";
  const hours = "00";
  const minutes = "00";
  const formattedStartDate = `${year}/${month}/${startDay} ${hours}:${minutes}`;
  const formattedEndDate = `${year}/${month}/${endDay} ${hours}:${minutes}`;

  const data = [
    {
      time: "2022/01/20",
    },
    {
      time: "2022/01/18",
    },
    {
      time: "2022/01/17",
    },
    {
      time: "2022/01/15",
    },
    {
      time: "2022/01/11",
    },
    {
      time: "2022/01/20",
    },
    {
      time: "2022/01/18",
    },
    {
      time: "2022/01/17",
    },
    {
      time: "2022/01/15",
    },
    {
      time: "2022/01/11",
    },
    {
      time: "2022/01/20",
    },
    {
      time: "2022/01/18",
    },
    {
      time: "2022/01/17",
    },
    {
      time: "2022/01/15",
    },
    {
      time: "2022/01/11",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className=" fixed right-14 top-[850px] z-50">
          <Home />
        </div>
        <NavBar />
        <div className="flex justify-between items-center py-4 pl-2 pr-5">
          <div>
            <p>
              {`${poolId}`} {title}
            </p>
          </div>
          <div>
            <SelectUI />
          </div>
        </div>
        <div className="flex justify-start items-center mx-2">
          <DatePicker time={formattedStartDate} />
          <TbTilde className="size-8" />
          <FaPlusCircle className="size-10 text-teal-500" />
        </div>
        <div className="flex justify-around items-center mt-2">
          <DatePicker time={formattedEndDate} />
        </div>

        <p className="mt-3 mb-3">目前總共{data.length}筆資料</p>

        <div className="flex flex-col justify-start items-start w-3/4 gap-3 mx-2 relative">
          {/* <FaArrowUp className="absolute right-4 top-22 size-5" /> */}
          {data.map((i) => (
            <div key={i.time} className="swipe-container rounded-xl border">
              <div className="swipe-content px-3 py-2 bg-white">
                <p>{i.time} 第三批次-餵養紀錄</p>
                <div className="swipe-delete rounded-xl">
                  <FaTrash />
                </div>
              </div>
            </div>
          ))}
          {/* <FaArrowDown className="absolute right-4 top-[150px] size-5" /> */}
        </div>

        {/* 顯示具體的記錄內容 */}
        {/* 目標頁面 需要接收傳遞進來的資料 */}
      </div>
    </>
  );
};

export default RecordPage;
