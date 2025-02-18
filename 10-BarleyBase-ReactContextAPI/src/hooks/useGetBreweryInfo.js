import { useEffect, useState } from "react";
import { BREWERY_DETAILS_API } from "../constants";
const useGetBreweryInfo = (brewId) => {
  const [breweryInfo, setBreweryInfo] = useState([]);

  useEffect(() => {
    getBreweryInfo();
  }, []);

  async function getBreweryInfo() {
    const response = await fetch(BREWERY_DETAILS_API + `${brewId}`);

    const json = await response.json();

    setBreweryInfo(json);
  }
  return breweryInfo;
};

export default useGetBreweryInfo;
