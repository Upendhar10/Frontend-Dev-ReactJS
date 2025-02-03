import React from "react";
import BrewCard from "./BrewCard";

const BreweryList = ({ breweries }) => {
  return (
    <div className="brewerys">
      {breweries.map((brew) => (
        <BrewCard {...brew} key={brew.id} />
      ))}
    </div>
  );
};

export default BreweryList;
