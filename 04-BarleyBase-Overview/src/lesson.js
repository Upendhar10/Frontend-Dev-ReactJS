// # React Fragment in React

/*
# React.Fragment: 
    - is a component exported by "react", 
    - It is like an empty tag,  <> </>

-> JSX can have only one parent, but we want two HTML tags in the JSX, we either use 'div' tag or we use React.Fragment

*/

import breweryList from "./breweryList";

// # Inline styling in React
const styleObj = {
  background: "Yellow",
};

const AppLayout = () => {
  {
    /*

      # React.fragment
          <React.Fragment>
          <h1>Namastha React</h1>
          <h2>Akshay </h2>
          </React.Fragment>
        

        -> If we want to style (inline) using react then , we use objects
        -> If we are using empty tags , then we should make them as 'div' then we can style it.
    */
  }

  return (
    <div style={styleObj}>
      <h1>React</h1>
      <h2>JSX</h2>
    </div>
  );
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # Hardcoding the Data into the card directly

const BrewCard = () => {
  return (
    <div className="BrewCard">
      <h2>(512) Brewing Co</h2>
      <h4>4058160490</h4>
      <h4>United States</h4>
      <h3>http://www.405brewing.com</h3>
    </div>
  );
};

// # Getting data from object into the card

const brewOne = {
  name: "(512) Brewing Co",
  phone: 4058160490,
  Country: "United States",
  website_url: "http://www.405brewing.com",
};

const BrewCard1 = () => {
  return (
    <div className="restroCard">
      <h2>{brewOne.name}</h2>
      <h4>{brewOne.phone}</h4>
      <h3>{brewOne.Country}</h3>
      <h3>{brewOne.website_url}</h3>
    </div>
  );
};

const Body1 = () => {
  return (
    <div className="body">
      <div className="brewerys">
        <BrewCard1 />
      </div>
    </div>
  );
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # Getting specific data from external file (restaurantList file [Static data])

// We can also pass multiple props at once

const BrewCard2 = (props) => {
  return (
    <div className="BrewCard">
      <h2>{props?.brew?.name}</h2>
      <h4>{props?.brew?.phone}</h4>
      <h3>{props?.brew?.Country}</h3>
      <h3>{props?.brew?.website_url}</h3>
    </div>
  );
};

const Body2 = () => {
  return (
    <div className="brewerys">
      <BrewCard2 brew={breweryList[1]} />
      {/* {BrewCard2(breweryList[1])} // similar to the above statement, but should be avoided in React since this syntax effects lifecycle methods. */}
      {/* <BrewCard2 restro = {breweryList[1]} hello="world"/> // multiple props */}
    </div>
  );
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # Getting complete data from restaurantList at once [Dynamically]

// displaying specific restaurant from restaurantList
const RestroCard3a = (props) => {
  console.log(props); // props = full-details of the all restauarants passed as argument => restaurantlist
  return (
    <div className="BrewCard">
      <h2>{props.breweryList[1].name}</h2>
      <h4>{props.breweryList[1].phone}</h4>
      <h4>{props.breweryList[1].country}</h4>
      <h4>{props.breweryList[1].website_url}</h4>
    </div>
  );
};

const RestroCard3b = (props) => {
  console.log(props); // props = full-details of the one restauarant passed as argument => breweryList[index]
  return (
    <div className="BrewCard">
      <h2>{props.name}</h2>
      <h4>{props.phone}</h4>
      <h3>{props.country}</h3>
      <h3>{props.website_url}</h3>
    </div>
  );
};

// Destructing of props ; levl-1

const RestroCard3c = ({ brew }) => {
  console.log(brew); // brew = { name, phone, country, website_rl } of each brew passed as argument
  return (
    <div className="BrewCard">
      <h2>{name}</h2>
      <h4>{phone}</h4>
      <h3>{country}</h3>
      <h3>{website_url}</h3>
    </div>
  );
};

// Destructing of props ; level-2
const RestroCard3d = ({ name, phone, country, website_url }) => {
  return (
    <div className="BrewCard">
      {/* <h2>{breweryList[0].name}</h2> */}
      <h2>{name}</h2>
      <h4>{phone}</h4>
      <h3>{country}</h3>
      <h3>{website_url}</h3>
    </div>
  );
};

// # Destructing of props
/*
    #  method-3b
    props                   // destructing the object                 -> props.brew.name        
    console.log(props);    // props contains every object (which was passed as arguments) of the breweryList array

    # method-3c
  {brew}          // destructing the object                      -> brew.name              
  console.log(brew);    // brew contains { name,phone , country, website_url} data of the every object (which was passed as arguments) of the breweryList array

    # method-3d
    const { name, phone, country, website_url}  => brew  -> {name}                   

*/

const Body3 = () => {
  return (
    <div className="brewerys">
      {/* Method-3a */}
      {/* {BrewCard ({breweryList})} */} // This incorrect of doing stuff in
      React, should be avoided.
      {/* <BrewCard {...{breweryList}}/> */}
      {/* // method-3b
          <BrewCard 
          name = {breweryList[0].name}
          phone = {breweryList[0].phone} 
          country={breweryList[0].coutry}
          website_rul = {breweryList[0].website_url}
          /> 
          */}
      {/* // method-3c
          <BrewCard key={0} restro={breweryList[0]}/> 
          */}
      {/* 
              // method-3d // spread operator
          <BrewCard key={0} {...breweryList[0]}/> 
          <BrewCard key={1} {...breweryList[1]}/>
          <BrewCard key={2} {...breweryList[2]}/>
          */}
    </div>
  );
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Getting complete data from all restaurantList as once using a map function + spread operator

const BrewCard4 = ({
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

const Body4 = () => {
  return (
    <div className="Body">
      <div className="brewerys">
        {breweryList.map((brewInfoObj) => {
          return <BrewCard4 {...brewInfoObj} key={brewInfoObj.id} />;
        })}
      </div>
    </div>
  );
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
