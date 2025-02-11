import { useParams } from "react-router-dom";
import ShimmerUI from "../components/ShimmerUI";
import useGetBreweryInfo from "../hooks/useGetBreweryInfo";

const BreweryDetails = () => {
  const { brewId } = useParams();

  const breweryInfo = useGetBreweryInfo(brewId);

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
