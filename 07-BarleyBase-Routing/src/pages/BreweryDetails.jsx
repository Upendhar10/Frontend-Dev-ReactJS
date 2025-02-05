import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "../components/ShimmerUI";
import { breweryDetailsAPI } from "../constants";
const BreweryDetails = () => {
  const { brewId } = useParams();

  const [breweryInfo, setBreweryInfo] = useState(null);

  useEffect(() => {
    getBreweryInfo();
  }, []);

  async function getBreweryInfo() {
    const response = await fetch(breweryDetailsAPI + `${brewId}`);
    const json = await response.json();

    setBreweryInfo(json);
    // console.log(breweryInfo);
  }

  return !breweryInfo ? (
    <ShimmerUI />
  ) : (
    <div className="BreweryDetails">
      <h2>Breweries Details</h2>
      <p>Brewery Id : {brewId}</p>
      <p>{breweryInfo[0]?.name}</p>
      <p>{breweryInfo[0]?.city}</p>
      <p>{breweryInfo[0]?.country}</p>
      <p>{breweryInfo[0]?.phone}</p>
      <p>{breweryInfo[0]?.website_url}</p>
    </div>
  );
};

export default BreweryDetails;

/*
      <p>{breweryInfo?.name}</p>
      <p>{breweryInfo?.city}</p>
      <p>{breweryInfo?.country}</p>
      <p>{breweryInfo?.phone}</p>
      <p>{breweryInfo?.website_url}</p>

*/
