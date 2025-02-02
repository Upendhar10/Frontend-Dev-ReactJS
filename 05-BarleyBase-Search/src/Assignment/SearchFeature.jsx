import React from "react";

const SearchFeature = ({
  searchText,
  setSearchText,
  allBreweries,
  setFilteredBreweries,
}) => {
  const handleSearch = () => {
    const filtered = allBreweries.filter((brew) =>
      brew.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBreweries(filtered);
  };

  return (
    <div className="SearchFeature">
      <input
        type="text"
        placeholder="Search for your favourite Breweries"
        className="SearchInput"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="SearchBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchFeature;
