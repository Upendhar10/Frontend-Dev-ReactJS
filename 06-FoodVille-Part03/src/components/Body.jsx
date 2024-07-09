import { restaurantList } from "../constants";
import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../constants";
import Shimmer from "./Shimmer";

//  key={restroObj.info.differentiatedUi.id}

function FilterRestaurantList(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  let [searchText, setSearchText] = useState("");
  let [allRestaurants, setAllRestaurants] = useState([]); // restaurantList // [] // to maintain all restaurants
  let [FilteredRestaurants, setFilteredRestaurants] = useState([]); // restaurantList // []   // to maintain all filtered restaurant

  useEffect(() => {
    // API Call
    getRestaurantsApi();
  }, []);

  async function getRestaurantsApi() {
    const api = await fetch(SWIGGY_API);
    const json = await api.json();
    console.log(json);

    // setRestaurants(json.data.cards[2].data.data.cards)
    apiResult =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setAllRestaurants(apiResult);
    setFilteredRestaurants(apiResult);

    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  console.log("render");

  /*
    # Conditional rendering
    if allRestaurants.length > 0  => render allRestaurants
    else if allRestaurants.length === 0  => render Shimmer
  */

  // early return : not returned component
  // if (!allRestaurants) return null;

  if (allRestaurants?.length === 0) {
    return <Shimmer />;
  }

  if (FilteredRestaurants?.length === 0) {
    return <h2>No match found, Try again!</h2>;
  }

  return (
    <div className="body container">
      <div className="Search-feature">
        <input
          type="search"
          className="search-bar"
          placeholder="search for your fav restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            // filter cards
            const cards = FilterRestaurantList(searchText, allRestaurants);
            // update cards
            setFilteredRestaurants(cards);
          }}
        >
          Search
        </button>
      </div>

      <div className="displayCards">
        {FilteredRestaurants.map((restroObj) => {
          return <RestroCard {...restroObj.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;

/* return <RestroCard {...restroObj}/> */
