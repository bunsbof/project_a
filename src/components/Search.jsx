import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="relative flex items-center mx-4 bg-[#fafafa] py-2 pt-1">
      <div className="absolute left-6">
        <FiSearch />
      </div>
      <input
        type="search"
        placeholder="Search for friends"
        className="w-full pl-9 m-2 border mx-4 outline-none rounded-[1rem] p-1"
      />
    </div>
  );
};

export default Search;
