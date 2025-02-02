import React from "react";
import { useState } from "react";

import breweryList from "../constants.js";
import BrewCard from "./BrewCard";

const FilterBreweryList = (searchTxt, brewerys) => {
  const FilteredData = brewerys.filter((brew) => {
    console.log(brew);
    return brew?.name?.toLowerCase().includes(searchTxt.toLowerCase());
  });

  console.log(`FilterData : ${FilteredData}`);

  return FilteredData;
};

const SearchFeature = ({ searchTxt, SetsearchTxt, brewerys, Setbrewerys }) => {
  console.log(searchTxt);

  return (
    <div className="SearchFeature">
      <input
        type="text"
        placeholder="Search for your favourite Breweries"
        className="SearchInput"
        value={searchTxt}
        onChange={(e) => {
          SetsearchTxt(e.target.value);
        }}
      />
      <button
        className="SearchBtn"
        onClick={() => {
          const FilteredBrewerys = FilterBreweryList(searchTxt, brewerys);
          console.log(`Inside Button : ${FilteredBrewerys}`);

          if (FilteredBrewerys.length === 0) {
            Setbrewerys(brewerys);
          } else {
            Setbrewerys(FilteredBrewerys);
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

const Body = () => {
  const [searchTxt, SetsearchTxt] = useState("");
  const [brewerys, Setbrewerys] = useState(breweryList);

  console.log(brewerys);

  return (
    <div className="Body">
      <SearchFeature
        searchTxt={searchTxt}
        SetsearchTxt={SetsearchTxt}
        brewerys={breweryList}
        Setbrewerys={Setbrewerys}
      />
      <div className="brewerys">
        {brewerys.map((brew) => {
          return <BrewCard {...brew} key={brew.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
