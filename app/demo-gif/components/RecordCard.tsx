import Link from "next/link";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";
export type Pool = {
  id: string;
  title: string;
  batch: number;
};
interface RecordCardProps {
  pool: Pool;
}
export default function RecordCard({ pool }: RecordCardProps) {
  return (
    <>
      <Link
        href={`/demo-gif/pool/record/${pool.batch}?id=${pool.id}&title=${pool.title}`}
        className=" rounded-xl w-3/4 h-3/4 bg-rose-400 p-3 text-white"
      >
        <div className="flex justify-between items-center">
          <h2>{pool.id}</h2> <MdOutlineEdit />
        </div>

        <h2>{pool.title}</h2>
        <div className="flex justify-start items-end pt-10">
          <h3>第{pool.batch}批次</h3>
        </div>
      </Link>
    </>
  );
}
