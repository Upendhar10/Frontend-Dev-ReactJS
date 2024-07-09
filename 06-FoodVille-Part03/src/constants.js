/*
    - It is a good practise to keep all the Hard-codded values in a separae file
    - for this purpose, we either use config.js or constants.js file naming

*/

export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

/*

Swiggy api - original 

https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING


Swiggy api - dummy 
https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING

api-2
https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667

*/

export const SWIGGY_API =
  // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999";

export const restaurantList = [
  {
    id: "9277",
    name: "Mehfil",
    cloudinaryImageId: "wkvh8xtryde5dj2nrme5",
    locality: "Attapur Main Road(pillar no-146)",
    areaName: "Rambagh Colony",
    costForTwo: "₹300 for two",
    cuisines: ["Biryani", "North Indian", "Tandoor", "Chinese", "Kebabs"],
    Ratings: 3.7,
  },
  {
    id: "11091",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Attapur",
    areaName: "Attapur",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    Ratings: 4.1,
  },
  {
    id: "6994",
    name: "Santosh Dhaba Exclusive",
    cloudinaryImageId: "jllcesio37olflwnvter",
    locality: "Abids",
    areaName: "Koti",
    costForTwo: "₹300 for two",
    cuisines: ["Biryani", "Chinese", "Italian", "Mexican", "Desserts"],
    Ratings: 4.1,
  },
  {
    id: "360967",
    name: "Wow! Momo",
    cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
    locality: "Vishwa Bhawan",
    areaName: "Himayath Nagar",
    costForTwo: "₹300 for two",
    cuisines: [
      "Tibetan",
      "Healthy Food",
      "Asian",
      "Chinese",
      "Snacks",
      "Continental",
      "Desserts",
      "Beverages",
    ],
    Ratings: 4.8,
  },
  {
    id: "20366",
    name: "Punjabi Rasoi",
    cloudinaryImageId: "knufkez5ln6h6bo7m9s2",
    locality: "Street number 3,Nalanda nagar",
    areaName: "Yerraboda",
    costForTwo: "₹250 for two",
    cuisines: ["North Indian"],
    Ratings: 4.6,
  },
  {
    id: "692219",
    name: "BOOM Sandwich - Sub of India",
    cloudinaryImageId: "96aaf72372ad1b0297b7cc304ced7e33",
    locality: "GUMMA KONDA COLONY",
    areaName: "Attapur",
    costForTwo: "₹250 for two",
    cuisines: ["Snacks", "Indian", "Desserts"],
    Ratings: 3.7,
  },
  {
    id: "140111",
    name: "Imperial Multi-Cusine Restaurant",
    cloudinaryImageId: "yeednzto1jusnnhswke0",
    locality: "Tolichowki",
    areaName: "Tolichowki",
    costForTwo: "₹400 for two",
    cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
    Ratings: 4.2,
  },
  {
    id: "491963",
    name: "NH1 Bowls - Highway To North",
    cloudinaryImageId: "94654fdf308764cd0faf83dba35bcdc3",
    locality: "Attapur",
    areaName: "GUMMA KONDA COLONY",
    costForTwo: "₹250 for two",
    cuisines: ["North Indian", "Punjabi", "Home Food"],
    Ratings: 3.9,
  },
  {
    id: "9966",
    name: "New Minerva Sweets",
    cloudinaryImageId: "evu59l76addywfczvlb9",
    locality: "Surya Nagar",
    areaName: "Toli Chowki",
    costForTwo: "₹250 for two",
    cuisines: [
      "Sweets",
      "Chaat",
      "Desserts",
      "Beverages",
      "Snacks",
      "Fast Food",
    ],
    Ratings: 4.2,
  },
];
