import React, { useState, useEffect } from "react";
import SearchFeature from "./SearchFeature";
import BreweryList from "./BreweryList";
import { breweryListAPI } from "../constants";
import ShimmerUI from "./ShimmerUI";

const Breweries = () => {
  const [searchText, setSearchText] = useState("");
  const [allBreweries, setAllBreweries] = useState([]);
  const [filteredBreweries, setFilteredBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data fetching effect
  useEffect(() => {
    const getBreweries = async () => {
      try {
        const response = await fetch(breweryListAPI);
        const data = await response.json();
        setAllBreweries(data);
        setFilteredBreweries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBreweries();
  }, []); // Empty dependency => runs only on mount

  // Search effect
  useEffect(() => {
    const filtered = allBreweries.filter((brew) =>
      brew.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBreweries(filtered);
  }, [searchText, allBreweries]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="Breweries">
      <SearchFeature searchText={searchText} setSearchText={setSearchText} />
      {loading ? <ShimmerUI /> : <BreweryList breweries={filteredBreweries} />}
    </div>
  );
};

export default Breweries;
