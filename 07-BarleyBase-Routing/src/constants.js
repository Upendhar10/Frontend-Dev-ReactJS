/*
    - It is a good practise to keep all the Hard-codeded values in a separate file
    - for this purpose, we either use config.js or constants.js file naming

*/

export const breweryListAPI = "https://api.openbrewerydb.org/v1/breweries";
export const breweryDetailsAPI =
  "https://api.openbrewerydb.org/v1/breweries?by_ids=";

const breweryList = [
  {
    id: "0",
    name: "Trend Brewing Co",
    brewery_type: "micro",
    city: "Norman",
    country: "United States",
    phone: "4058160490",
    website_url: "http://www.405brewing.com",
  },
  {
    id: "1",
    name: "Eleven Brewing Co",
    brewery_type: "micro",
    city: "Austin",
    country: "United States",
    phone: "5129211545",
    website_url: "http://www.512brewing.com",
  },
  {
    id: "2",
    name: "Hustle Brewing Company",
    brewery_type: "micro",
    city: "Mount Pleasant",
    country: "United States",
    phone: "2624847553",
    website_url: "https://www.1ofusbrewing.com",
  },
  {
    id: "3",
    name: "Brewing Nation Co",
    brewery_type: "micro",
    city: "Austin",
    country: "United States",
    phone: "5129211545",
    website_url: "http://www.512brewing.com",
  },
  {
    id: "4",
    name: "Hyat Brewing Company",
    brewery_type: "micro",
    city: "Mount Pleasant",
    country: "United States",
    phone: "2624847553",
    website_url: "https://www.1ofusbrewing.com",
  },
  {
    id: "5",
    name: "Just Brewing Co",
    brewery_type: "micro",
    city: "Austin",
    country: "United States",
    phone: "5129211545",
    website_url: "http://www.512brewing.com",
  },
];

export default breweryList;
