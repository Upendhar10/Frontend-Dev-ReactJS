import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchFeature = ({ searchText, setSearchText }) => {
  return (
    <div className="SearchFeature">
      <div className="searchFt">
        <input
          type="text"
          placeholder="Search for your favourite breweries..."
          className="SearchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IoSearchSharp className="SearchIcon" />
      </div>
    </div>
  );
};

export default SearchFeature;
