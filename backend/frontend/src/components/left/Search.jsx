import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <form action="">
        <div className="flex items-center gap-3 my-2">
          <label className="border border-gray-700 bg-slate-900 flex items-center gap-2 rounded w-[98%] px-2 py-1">
            <IoSearch className="text-sm" />
            <input
              type="text"
              required
              placeholder="Search"
              className="grow outline-none bg-slate-900 text-base"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Search;
