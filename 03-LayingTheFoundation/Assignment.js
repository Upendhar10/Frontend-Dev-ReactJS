
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
    # Task-1 : 
        a. Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
        b. Create a `Nested header Element` using JSX
        c. Create a `functional component of the same with JSX`
*/ 

// # a . Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
const NestedHeader1 = React.createElement(
    "div", {className: "title"},
    React.createElement("h1", "H1 element"),
    React.createElement("h2", "H2 element"),
    React.createElement("h4", "H3 element")
)

// # b. Create a `Nested header Element` using JSX

// react elements 
const h1 = ReactDOM.createElement("h1", "H1 element")
const h2 = <h1>H2 element</h1>
const h3 = <h1>H3 element</h1>

// React functional component
const NestedHeader2 = (
    <div className="title">
        {h1}
        {h2}
        {h3}
    </div>
)

// # c. Create a `functional component of the same with JSX`

const NestedHeader3 = (
    <div className="title">
        <h1>H1 element</h1>
        <h2>H2 element</h2>
        <h4>H3 element</h4>
    </div>
)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # Task - 2 : Header component

const Logo = () => {
    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Logo"/>
        </div>
    )
}

const SearchBar = () => {
    return (
        <>
            <input type="text" placeholder="Search here"/>
            <button>Search</button>
        </>
    )
}

const UserIcon = () => {
    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="User"/>
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <Logo/>
            <SearchBar/>
            <UserIcon/>
        </div>
    )
}

// root.render(<Header/>);