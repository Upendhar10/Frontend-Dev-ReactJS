// # React Fragment in React
/*
# React.Fragment: 
    - is a component exported by "react", 
    - It is like an empty tag,  <> </>

-> JSX can have only one parent, but we want two HTML tags in the JSX we either use 'div' tag or we use React.Fragment

*/

import restaurantList from "./restaurantList";

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
            <h2>Akshay Saini</h2>
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

// # Hardcoding the Data

const RestroCard0 = () => {
  return (
    <div className="restroCard">
      <img src="" alt="image" />
      <h2>Burger King</h2>
      <h4>Burgers, American</h4>
      <h3>4.2 stars</h3>
    </div>
  );
};

// # Getting data from object directly

const burgerKing = {
  name: "burgerKing",
  image:
    "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
  cusines: ["Latin", "American"],
  Ratings: "4.2",
};

const RestroCard1 = () => {
  return (
    <div className="restroCard">
      <img src={burgerKing.image} />
      <h2>{burgerKing.name}</h2>
      <h4>{burgerKing.cusines.join(" , ")}</h4>
      <h3>{burgerKing.Ratings} stars</h3>
    </div>
  );
};

const Body1 = () => {
  return (
    <div className="body">
      <div className="restaurants">
        <RestroCard1 />
      </div>
    </div>
  );
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # Getting specific data from restaurantList file [Static data]

// We can also pass multiple props at once

const RestroCard2 = () => {
  return (
    <div className="restroCard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurantList[1].cloudinaryImageId
        }
      />
      <h2>{restaurantList[1]?.name}</h2>
      <h4>{restaurantList[1]?.cuisines.join(" , ")}</h4>
    </div>
  );
};

const Body2 = () => {
  return (
    <div className="restaurants">
      <RestroCard2 restro={restaurantList[1]} />
      {RestroCard2(restaurantList[1])} // similar to the above statement
      {/* <RestroCard2 restro = {restaurantList[1], hello="world"}/> // multiple props */}
    </div>
  );
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # Getting complete data from restaurantList  [Dynamically]

// displaying specific restaurant from restaurantList
const RestroCard3a = (props) => {
  console.log(props); // props = full-details of the all restauarants passed as argument => restaurantlist
  return (
    <div className="restroCard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.restaurantList[1].cloudinaryImageId
        }
      />
      <h2>{props.restaurantList[1].name}</h2>
      <h4>{props.restaurantList[1].cuisines.join(" , ")}</h4>
    </div>
  );
};

const RestroCard3b = (props) => {
  console.log(props); // props = full-details of the one restauarant passed as argument => restaurantlist[index]
  return (
    <div className="restroCard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.cloudinaryImageId
        }
      />
      <h2>{props.name}</h2>
      <h4>{props.cuisines.join(" , ")}</h4>
    </div>
  );
};

// Destructing of props ; Method-1

const RestroCard3c = ({ restro }) => {
  console.log(restro); // restro = { cloudinaryImageId, name, cuisines, locality} of each restaurant passed as argument
  return (
    <div className="restroCard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(" , ")}</h4>
    </div>
  );
};

// Destructing of props ; Method-2
const RestroCard3d = ({ cloudinaryImageId, name, cuisines, locality }) => {
  return (
    <div className="restroCard">
      {/* <h2>{restaurantList[0].name}</h2> */}

      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h3>{locality}</h3>
    </div>
  );
};

// # Destructing of props
/*
    #  method-3b
    props                   // destructing the object                 -> props.restro.name        
    console.log(props);    // props contains every object (which was passed as arguments) of the restrauntList array

    # method-3c
  {restro}          // destructing the object                      -> restro.name              
  console.log(restro);    // restro contains { cloudinaryImageId, name, cuisines, locality} data of the every object (which was passed as arguments) of the restrauntList array

    # method-3d
    const { cloudinaryImageId, name, cuisines, locality}  => restro  -> {name}                   

*/

const Body3 = () => {
  return (
    <div className="restaurants">
      {/* Method-3a */}
      {/* {RestroCard ({restaurantList})} */}
      {/* <RestroCard {...{restaurantList}}/> */}

      {/* // method-3c
        <RestroCard 
        cloudinaryImageId = {restaurantList[0].cloudinaryImageId}
        name = {restaurantList[0].name} 
        cuisines={restaurantList[0].cuisines}
        locality = {restaurantList[0].locality}
        /> 
        */}

      {/* 
            // method-3d // spread operator
        <RestroCard {...restaurantList[0]}/> 
        <RestroCard {...restaurantList[1]}/>
        <RestroCard {...restaurantList[2]}/>

        */}
    </div>
  );
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Getting complete data from all restaurantList as once using a map function

const RestroCard3e = ({ cloudinaryImageId, name, cuisines, locality }) => {
  return (
    <div className="restroCard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h3>{locality}</h3>
    </div>
  );
};

const Body4 = () => {
  console.log(restaurantList);
  return {
    // <div className="restaurants">
    //     restaurantList.map((RestroInfoObj)=> {
    //     return <RestroCard3e {...RestroInfoObj}/>;
    //     })
    // </div>
  };
};

<div className="restaurants">
  <RestroCard {...restaurantList} />
</div>;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Body = () => {
  return (
    <div className="restaurants">
      {/*
           # method-1  : loads only first card
        <RestroCard/>                           //  restaurantList[0]    
        {RestroCard (restaurantList[0])}        // not loading 
        */}

      {/* 
            # method-2 : loads only specified card
        <RestroCard restaurant = {restaurantList[1], hello="world"}/> // multiple props
        - Here, restaurant is called a prop
        */}

      {/* {RestroCard({restaurant})} */}

      {/* <RestroCard restaurant = {restaurantList[1]}/> */}

      {/* <RestroCard 
        cloudinaryImageId = {restaurantList[0].cloudinaryImageId}
        name = {restaurantList[0].name} 
        cuisines={restaurantList[0].cuisines}
        locality = {restaurantList[0].locality}
        /> */}

      {/* 

        <RestroCard {...restaurantList[1]}/> 
        <RestroCard {...restaurantList[0]}/>
        <RestroCard {...restaurantList[1]}/>

        */}

      {/* {
            restaurantList.map((RestroInfoObj)=> {
                return <RestroCard {...RestroInfoObj}/>;
            })
        } */}
    </div>
  );
};
