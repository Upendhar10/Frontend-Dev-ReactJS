import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="heroSection">
      <div className="heroText">
        <h1>
          The Collection of <strong> Best Breweries </strong> curated for
          Brewery Lovers by <strong> Brewery Lovers! </strong>
        </h1>
        <p>Savor the Flavor Responsibly!🍻</p>
        <button onClick={() => navigate("/breweries")}>Check it Out</button>
      </div>
      <div className="heroImg">
        <img src="https://eu-images.contentstack.com/v3/assets/blta023acee29658dfc/blta459b7caa6a1138f/651a75551fb1af6f9e794248/INX-Beer-Can-Design-Contest-5-Finalists-New-1540x800.png?width=1280&auto=webp&quality=95&format=jpg&disable=upscale" />
      </div>
    </div>
  );
};

export default Hero;
