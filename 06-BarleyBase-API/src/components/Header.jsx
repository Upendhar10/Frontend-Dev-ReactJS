import React from "react";
import { IoBagCheck } from "react-icons/io5";
import { assets } from "../assets/assets";

export const Logo = () => {
  return (
    <div className="logoDiv">
      {/* <img
        src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
        alt="logo"
      /> */}
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

const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Header;
