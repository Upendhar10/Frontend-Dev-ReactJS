// # creating a child to a div using React

const heading = React.createElement("h1", {}, "Frontend Dev");

const cont3 = ReactDOM.createRoot(document.getElementById("cont3"));

// cont3.render(heading);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # creating a nested div using React

const h1course = React.createElement("h1", { id: "course" }, "Frontend Dev");
const h2instructor = React.createElement("h2", { id: "instructor" }, "Akshay");

const CourseInfo = React.createElement("div", { id: "CourseInfo" }, [
  h1course,
  h2instructor,
]);

// cont4.render(CourseInfo); // Only single root element allowed in the HTML document
cont3.render(CourseInfo);
