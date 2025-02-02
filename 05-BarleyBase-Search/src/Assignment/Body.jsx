import React from "react";
import { useState } from "react";
import breweryList from "../constants.js";
import BrewCard from "./BrewCard";
import SearchFeature from "./SearchFeature"; // Assume SearchFeature is adjusted

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allBreweries] = useState(breweryList);
  const [filteredBreweries, setFilteredBreweries] = useState(breweryList);

  return (
    <div className="Body">
      <SearchFeature
        searchText={searchText}
        setSearchText={setSearchText}
        allBreweries={allBreweries}
        setFilteredBreweries={setFilteredBreweries}
      />
      <div className="brewerys">
        {filteredBreweries.map((brew) => (
          <BrewCard {...brew} key={brew.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
