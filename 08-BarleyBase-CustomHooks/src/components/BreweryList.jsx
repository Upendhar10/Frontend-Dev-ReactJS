import React from "react";
import BrewCard from "./BrewCard";
import { Link } from "react-router-dom";

const BreweryList = ({ breweries }) => {
  return (
    <div className="brewerys">
      {breweries.map((brew, id) => (
        <Link to={`/breweries/${brew.id}`} key={brew.id}>
          <BrewCard {...brew} />
        </Link>
      ))}
    </div>
  );
};

export default BreweryList;
