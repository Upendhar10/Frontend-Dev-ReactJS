import { useEffect, useState } from "react";
import { filteredBreweryList } from "../utils/helper";

const useSearchBreweries = (allBreweries, initialSearch = "") => {
  const [searchText, setSearchText] = useState(initialSearch);
  const [filteredBreweries, setFilteredBreweries] = useState(allBreweries);

  useEffect(() => {
    const filtered = filteredBreweryList(allBreweries, searchText);
    setFilteredBreweries(filtered);
  }, [searchText, allBreweries]);

  return { searchText, setSearchText, filteredBreweries };
};

export default useSearchBreweries;
