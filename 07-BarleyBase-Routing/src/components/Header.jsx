import React, { useState } from "react";
import { IoBagCheck } from "react-icons/io5";
import { assets } from "../assets/assets";

import { Link } from "react-router-dom";

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
      <p>
        <Link to="/">HOME</Link>
      </p>
      <p>
        <Link to="/breweries">BREWERIES</Link>
      </p>
      <p>
        <Link to="/about">ABOUT</Link>
      </p>
      <p>
        <Link to="/contactUs">CONTACT US</Link>
      </p>
      <p className="cart">
        <Link to="/cart">
          <IoBagCheck />
        </Link>
      </p>
    </div>
  );
};

const LogStatus = ({ logStatus, SetlogStatus }) => {
  function handleLogStatus() {
    if (!logStatus) {
      SetlogStatus(true);
    } else {
      SetlogStatus(false);
    }
  }
  return (
    <div onClick={handleLogStatus}>
      {logStatus === true ? <button>LogOut</button> : <button>LogIn</button>}
    </div>
  );
};

const Header = () => {
  const [logStatus, SetlogStatus] = useState(false);

  return (
    <div className="Header">
      <Logo />
      <NavLinks />
      <LogStatus logStatus={logStatus} SetlogStatus={SetlogStatus} />
    </div>
  );
};

export default Header;
