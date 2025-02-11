import React from "react";
import SearchFeature from "./SearchFeature";
import BreweryList from "./BreweryList";
import ShimmerUI from "./ShimmerUI";
import useFetchBreweries from "../hooks/useFetchBreweries";
import useSearchBreweries from "../hooks/useSearchBreweries";

const Breweries = () => {
  const { allBreweries, loading, error } = useFetchBreweries();
  const { searchText, setSearchText, filteredBreweries } =
    useSearchBreweries(allBreweries);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="Breweries">
      <SearchFeature searchText={searchText} setSearchText={setSearchText} />
      {loading ? <ShimmerUI /> : <BreweryList breweries={filteredBreweries} />}
    </div>
  );
};

export default Breweries;
