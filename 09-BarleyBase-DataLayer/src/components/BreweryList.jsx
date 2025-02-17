import React from "react";
import BrewCard from "./BrewCard";
import { Link } from "react-router-dom";

const BreweryList = ({ brewerys }) => {
  return (
    <div className="brewerys">
      {brewerys.map((brew) => (
        <Link to={`/breweries/${brew.id}`} key={brew.id}>
          <BrewCard {...brew} />
        </Link>
      ))}
    </div>
  );
};

export default BreweryList;
