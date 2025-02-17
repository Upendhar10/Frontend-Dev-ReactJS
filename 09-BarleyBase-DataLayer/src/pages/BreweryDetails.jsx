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
      <div className="BreweryDetailsCard">
        <h2>Breweries Details</h2>
        <p>Brewery Id : {brewId}</p>
        <p>Name : {breweryInfo[0]?.name}</p>
        <p>City : {breweryInfo[0]?.city}</p>
        <p>Country : {breweryInfo[0]?.country}</p>
        <p>Phone : {breweryInfo[0]?.phone}</p>
        <p>Website : {breweryInfo[0]?.website_url}</p>
      </div>
    </div>
  );
};

export default BreweryDetails;
