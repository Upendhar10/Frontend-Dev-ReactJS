import React from "react";

const SearchFeature = ({ searchText, setSearchText }) => {
  return (
    <div className="SearchFeature">
      <input
        type="text"
        placeholder="Search breweries..."
        className="SearchInput"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchFeature;
