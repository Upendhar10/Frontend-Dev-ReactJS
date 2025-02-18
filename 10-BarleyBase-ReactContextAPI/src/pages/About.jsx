import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <h2>
        <Link to="/about/techstack">Techstack ↗️</Link>
      </h2>
      <Outlet />
    </div>
  );
};

export default About;

