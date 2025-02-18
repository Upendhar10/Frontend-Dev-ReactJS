import React, { useState } from "react";
import { IoBagCheck } from "react-icons/io5";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

import LogStatus from "./LogStatus";
import InternetStatus from "./InternetStatus";

export const Logo = () => {
  return (
    <div className="logoDiv">
      <a href="/">
        <img src={assets.BarleyBaseLogo} />
      </a>
    </div>
  );
};

const NavLinks = () => {
  return (
    <div className="NavLinks">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/breweries">BREWERIES</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contactUs">CONTACT US</Link>
        </li>
      </ul>
    </div>
  );
};

const Cart = () => {
  return (
    <span className="cart">
      <Link to="/cart">
        <IoBagCheck />
      </Link>
    </span>
  );
};

const Header = () => {
  const [logStatus, SetlogStatus] = useState(false);

  return (
    <div className="Header">
      <Logo />
      <NavLinks />
      <div className="nav-btns">
        <Cart />
        <InternetStatus />
        <LogStatus logStatus={logStatus} SetlogStatus={SetlogStatus} />
      </div>
    </div>
  );
};

export default Header;
