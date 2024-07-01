import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header"; // Default import
// import { Logo } from "./components/Header"; // Named import

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
                - Cursine
    Footer

*/

const root = ReactDOM.createRoot(document.querySelector(".root"));

// # Defining App Layout
const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

// # Rendering AppLayout
root.render(<AppLayout />);
