import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", {}, "Frontend Dev");
const h2 = React.createElement("h2", {}, "Web Dev Guy");

const root = ReactDOM.createRoot(document.getElementById("root"));

const CourseInfo = React.createElement("div", {}, [h1, h2]);

root.render(CourseInfo);
