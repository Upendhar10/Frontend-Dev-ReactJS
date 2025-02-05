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
      <p>{brewery_type}</p>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{city}</p>
      <p>{country}</p>
      <p>{website_url}</p>
    </div>
  );
};

export default BrewCard;
