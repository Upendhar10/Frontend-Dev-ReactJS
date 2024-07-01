/*
    # UseState() Hook :

    - UseState() is a function that allows us to create State variable in React.
    - React only keep track of the State variables by itself.

    - UseState returns a new array of State variables
        - variable at arr[0]
        - function at arr[1]
    
    - const [count, setCount] = useState(); 
    - we can pass the default value of the state variable 'count' , useState(0);
    - we specfiy what should be done once the state variable is updated in the 'setCount' function

    # Doubt : 
    - If we use 'let' instead of 'const', while declaring, then we possible change the value of the state variable but that change will not be impacted in the UI.

    - It is observed that for every state change the UI is updated meaning the UseState() hook is called, But the ambugity araises that how the useState() remembers the updated value of 'count' rather than the default value ?, 
    - The answer is because of the concept of clousere concept. 
    - If we also observe partiiculary, useState() will only called only if the already present data/content is different this update.
     
    */

import React from "react";
import { useState } from "react";

const CountWhat = () => {
  // console.log(useState());        // function

  const stateArray = useState();

  const count = stateArray[0];
  const setCount = stateArray[1];

  // const [count, setCount] = useState()  // de-structured stateArray

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={setCount(count + 1)}></button>
    </div>
  );
};
