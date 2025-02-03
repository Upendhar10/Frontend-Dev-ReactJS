import React, { useState } from "react";
import { IoBagCheck } from "react-icons/io5";
import { assets } from "../assets/assets";

export const Logo = () => {
  return (
    <div className="logoDiv">
      <img src={assets.BarleyBaseLogo} />
    </div>
  );
};

const NavLinks = () => {
  return (
    <div className="NavLinks">
      <p>HOME</p>
      <p>ABOUT</p>
      <p>CONTACT US</p>
      <p className="cart">
        <IoBagCheck />
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
