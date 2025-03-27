import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div>
      <form action="">
        <div className="flex items-center gap-3 my-2">
          <label className="border border-gray-700 bg-slate-900 flex items-center gap-2 rounded w-[80%] px-2 py-1">
            <input
              type="text"
              required
              placeholder="Search"
              className="grow outline-none bg-slate-900 text-base"
            />
          </label>
          <IoSearch className="text-4xl p-2 hover:bg-gray-500 rounded-full duration-300 cursor-pointer" />
        </div>
      </form>
    </div>
  );
};

export default Search;
