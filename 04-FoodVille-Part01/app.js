import React from "react";
import ReactDOM from "react-dom/client";
import restaurantList from "./restaurantList";

const root = ReactDOM.createRoot(document.querySelector(".root"));

// # AppLayout

const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

// # Header Section

const Logo = () => (
  <a href="/">
    <img
      className="logo"
      src="https://images.squarespace-cdn.com/content/v1/631bccd58157204f1e64d547/aa44e4ab-13c7-49ac-80b1-28e0cb210b78/Foodville_Logo.png"
      alt="FoodVille"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// # Body

const RestroCard = ({ cloudinaryImageId, name, cuisines }) => {
  console.log(name);
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

const Body = () => {
  return (
    <div className="body">
      <div className="restaurants">
        {
            restaurantList.map((RestroInfoObj) => {
                return <RestroCard {...RestroInfoObj} key={RestroInfoObj.id} />;
            })
        }
      </div>
    </div>
  );
};

// # Footer

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <h2>Address</h2>
      <h2>Contact us</h2>
      <h2>Copyright</h2>
    </div>
  );
};

root.render(AppLayout());
