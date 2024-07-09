import { useEffect, useState } from "react";

/*
    # useEffect Hook : 

        - used to call api's
        - used to handle the behaviour of the local state variables

        => Life cycle of a React component
            Initailised -> Mounted on the screen -> Updated -> unmounted from the screen

    - Every variation of useEffect() will be rendered for at least one time.

*/

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [name, setName] = useState("Mike");

  // Variation-1 : no dependency array specified :  On every render
  useEffect(() => {
    console.log("useEffect - on very render");
  });

  // Variation-2 : empty dependency array : On First render / Mount only!

  useEffect(() => {
    console.log("useEffect - on first render / Mount only");
  }, []);

  // Variation-3 :  On first render + whenever dependency array changes!

  useEffect(() => {
    console.log(
      `useEffect - on first render + whenever dependency array changes - ${name}`
    );
  }, [name]);

  // Variation-4 : On first render + before the unmounting of component
  useEffect(() => {
    console.log(
      "useEffect - on first render + before the unmounting of component"
    );
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      // when component unmounts, this cleanup code runs....
      console.log(
        "useEffect - on first render + before the unmounting of component"
      );
      window.addEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <h1>The useEffect Hook</h1>
      <h1>The window width is : {windowWidth}</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
    </div>
  );
}

//  console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

/*
    # Expression Vs Statement 

    {
        any piece of Js can be written in this braces   // only expression
    }

    expression => console.log()
    statement => a=10           // alone can be rendered inside the braces

    /* expression + statement
    ((a=10),console.log(a))     // together can be rendered inside the braces


    - if-else is a statement, but terinary operators is an expression

*/

// Shimmer Effect - UX principle

/*

    # Conditional rendering : 
    -  If the restaurants is not available, load shimmer UI
    -  else , load  actual restaurants UI

*/
