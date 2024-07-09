import assets from "../../assets/assets";

const Hero = () => {
  return (
    <div className="Hero container">
      <div className="left">
        <h1>The Quickest way to satisfy your food cravings.</h1>

        {/* <h3>Buy 1 Get 1 FREE offer</h3> */}
        <button>Order Now</button>
        <button>Hyderabad</button>
      </div>

      <div className="right">
        <img src={assets.FV_hero} alt="foodvector" />
      </div>
    </div>
  );
};

export default Hero;
