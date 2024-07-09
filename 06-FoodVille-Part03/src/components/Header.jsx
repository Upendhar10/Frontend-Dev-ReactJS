import { useState } from "react";
import assets from "../../assets/assets";

// const loggedInUser = () => {
//   // API call
//   return true;
// };

export const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={assets.Foodville_Logo} alt="logo" />
    </a>
  );
};

// https://images.squarespace-cdn.com/content/v1/631bccd58157204f1e64d547/aa44e4ab-13c7-49ac-80b1-28e0cb210b78/Foodville_Logo.pn

const NavLinks = () => {
  return (
    <div className="nav-links">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Header = () => {
  const [userStatus, SetUserStatus] = useState(false);

  return (
    <div className="header container">
      <Logo />
      <NavLinks />
      {userStatus ? (
        <button className="logInlogOut" onClick={() => SetUserStatus(false)}>
          LogOut
        </button>
      ) : (
        <button className="logInlogOut" onClick={() => SetUserStatus(true)}>
          LogIn
        </button>
      )}
    </div>
  );
};

export default Header;
