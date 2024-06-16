// src/SearchBar.js
import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="flex items-center mb-4 relative rounded-xl w-11/12">
      <input
        type="text"
        placeholder="請輸入關鍵字查詢......"
        className="flex-1 p-2 border border-gray-300 rounded-xl mr-2"
      />
      <FaSearch className=" absolute right-6" />
      {/* <button className="p-2 bg-teal-500 text-white rounded">搜尋</button> */}
    </div>
  );
};

export default SearchBar;
