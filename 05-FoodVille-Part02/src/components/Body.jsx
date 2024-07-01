// Body-section

import restaurantList from "../constants";

import RestroCard from "./RestroCard";

import { useState } from "react";

// # Filter function

function FilterRestaurantList(searchText, restaurants) {
  const filterData = restaurants.filter((restro) =>
    restro?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  /*

    let searchTxt = "Hello"     // variable initialization in JS

    # searchText is a local state variable

    const [searchText,setSearchText] = searchVar    // Array destructing

    -> useState() hook : returns an array and first element is stored in 'searchText'
    -> useState() hook : returns [value of the variable, function to update the value of variable]    
    
    */

  let [searchText, setSearchText] = useState(""); // for search text

  const [restaurants, setRestaurants] = useState(restaurantList); // importing date from restaurantList and storing in 'restaurants' variable.

  // console.log(cardsList);

  // console.log(restaurantList);

  /*
    # button - true/false

    let [searchBoolean, setSearchBoolean] = useState("false");

    if(searchBoolean === "true"){
        setSearchBoolean("false");
    }else {
        setSearchBoolean("true");
    }

    */

  return (
    <div className="main">
      {/* Implementing search feature */}

      <div className="search-feature">
        <input
          type="text"
          className="search-bar"
          placeholder="search restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}

          // searchText = e.target.value;    // direct modification is not possible
          // So we use set() provided by the useState() hook
        />

        <button
          className="search-btn"
          onClick={() => {
            // filter cards based on seachText
            const FilteredRestroList = FilterRestaurantList(
              searchText,
              restaurants
            );

            // update 'displayCards'
            setRestaurants(FilteredRestroList);
          }}
        >
          Search
        </button>
      </div>

      {/* Displaying all cards */}

      <div className="displayCards">
        {
          // restaurantList === restaurants
          restaurants.map((restroInfoObj) => {
            return <RestroCard {...restroInfoObj} key={restroInfoObj.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Body;
