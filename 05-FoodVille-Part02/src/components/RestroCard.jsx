import { IMG_CDN_URL } from "../constants";

const RestroCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  Ratings,
  areaName,
}) => {
  return (
    <div className="restroCard">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 >{name}</h2>
      <h5>{cuisines.join(" , ")}</h5>
      <h4>{Ratings} stars</h4>
      <h3>{areaName}</h3>
    </div>
  );
};

export default RestroCard;
