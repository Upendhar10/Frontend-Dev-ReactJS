const BrewCard = ({
  name,
  brewery_type,
  address,
  phone,
  city,
  country,
  website_url,
}) => {
  return (
    <div className="BrewCard">
      <h2>{name}</h2>
      <p>Brewery Type: {brewery_type}</p>
      <p>Address : {address}</p>
      <p>Phone :{phone}</p>
      <p>City : {city}</p>
      <p>Country : {country}</p>
      <p>Website : {website_url}</p>
    </div>
  );
};

export default BrewCard;
