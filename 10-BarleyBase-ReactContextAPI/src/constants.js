/*
    - It is a good practise to keep all the Hard-codeded values in a separate file
    - for this purpose, we either use config.js or constants.js file naming

*/

export const BREWERY_LIST_API = "https://api.openbrewerydb.org/v1/breweries";
export const BREWERY_DETAILS_API =
  "https://api.openbrewerydb.org/v1/breweries?by_ids=";

export const breweryList = [
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

export const accordionList = [
  {
    Question: "What is the core library of this project",
    Answer: "React - UI development Library",
  },
  {
    Question: "What about CSS in this project",
    Answer: "CSS is written using SCSS framework",
  },
  {
    Question: "What is the core library of this project",
    Answer: "React - UI development Library",
  },
  {
    Question: "What is the bundler used in this project",
    Answer: "Parcel - the Beast!",
  },
  {
    Question: "Which Routing Library is used in the project",
    Answer: "React Router DOM - Version 6.14",
  },
  {
    Question:
      "What are the State Management Libraries used in the entire project",
    Answer: "React Context API - Authentication and Redux-toolkit - Cart ",
  },
  {
    Question: "What is the testing library used in this project",
    Answer: "Jest - Unit Testing",
  },
];
