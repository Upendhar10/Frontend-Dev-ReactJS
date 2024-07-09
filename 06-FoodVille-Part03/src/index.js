import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

/*
    # Overview of FoodVille App

    Header
        - logo
        - nav links
        - Cart
    Body
        - Search bar
        - Restro list
            - Restaurant Card
                - Img
                - Restro name
                - Ratings
                - Cusine
    Footer

*/

const root = ReactDOM.createRoot(document.querySelector(".root"));

const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
};

root.render(AppLayout());
