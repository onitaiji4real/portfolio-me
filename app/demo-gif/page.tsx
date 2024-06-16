import React from "react";
import RecordList from "./components/RecordList";
import Home from "./ui/Home";

export default function page() {
  return (
    <>
      <div className=" relative">
        <RecordList />
        <div className=" fixed right-14 top-[850px]">
          <Home />
        </div>
      </div>
    </>
  );
}
