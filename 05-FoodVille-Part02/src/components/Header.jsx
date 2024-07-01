// Header-section

export const Logo = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://images.squarespace-cdn.com/content/v1/631bccd58157204f1e64d547/aa44e4ab-13c7-49ac-80b1-28e0cb210b78/Foodville_Logo.png"
        alt="FoodVille"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header container">
      <Logo />
      <div className="nav-links">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>CartIcon</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
