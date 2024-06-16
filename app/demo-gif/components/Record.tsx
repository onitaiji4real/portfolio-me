import React from "react";
import { SelectUI } from "./SelectUI";
import SearchBar from "./SearchBar";
import RecordCard from "./RecordCard";
import { Pool } from "./RecordCard";
import Link from "next/link";

export default function Record() {
  const poolData: Pool[] = [
    { id: "01", title: "白蝦池", batch: 1 },
    { id: "02", title: "鯊魚池", batch: 2 },
    { id: "03", title: "鰻魚池", batch: 3 },
    { id: "04", title: "龍膽石斑池", batch: 4 },
    { id: "05", title: "蛤仔池", batch: 5 },
    { id: "06", title: "鯊魚池", batch: 6 },
    { id: "07", title: "蛤仔池", batch: 5 },
    { id: "08", title: "鯊魚池", batch: 6 },
  ];
  return (
    <>
      <div className=" mx-3 my-3 flex justify-between items-center">
        <h2> 飼養紀錄</h2>
        <SelectUI />
      </div>
      <div className="flex justify-end items-center">
        <SearchBar />
      </div>
      <div className="flex flex-col items-center justify-center gap-3  ">
        {poolData.map((pool) => (
          <RecordCard key={pool.id} pool={pool} />
        ))}
      </div>
    </>
  );
}
