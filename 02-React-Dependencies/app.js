import React from "react";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const CourseName = React.createElement("h2", {}, "React-Dev");

const CourseDomain = React.createElement("h2", {}, "Frontend Development");

const CourseInstructor = React.createElement("h2", {}, "A March");

const CourseInfo = React.createElement("div", {}, [
  CourseDomain,
  CourseName,
  CourseInstructor,
]);

root.render(CourseInfo);
