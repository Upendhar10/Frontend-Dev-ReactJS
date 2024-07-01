# Agenda

## React File Structure

    - src folder
        - component folder
            - Header
            - Body
            - Footer
        - app.js
        - constants.js
        - index.html
        - style.css
        - package.json
        - package-lock.json
        - .gitignore

## importing & exporting files

- Exporting

  1. export default functionalComponentName;
     - only exports single functionalComponent at once.
     - If the file consists of multiple functionalComponent, we can use this
  2. export Specific functionalComponent
     - we should include export keyword before the functionalComponent definition, in order to export individual component

- Importing

  1. Default import
     - used for export default
       Eg : import Header from "./components/Header"
  2. Named import

     - used in case of export Specific functionalComponent
       Eg : import {Title} from "./components/Header"

  3. Import all 'Named import' components at once
     Eg : import \* as Obj from "./components/Header"

  Note :

  1. we can also rename the functionalComponent which we are exporting using 'Named import' (but, not recommended)
     - Eg : import newHeader from "./components/Header"
       - newHeader is an alias of the Header in the Header.js
  2. We can save the files using two extensions ,
     - .jsx and also .js

## What is Sate and Hooks in REACT

## Building Seach-bar Feature

- React has a one-way data binding feature
- input tag in HTML and input tag in REACT behaviours little diiferent
- by default, In REACT we cannot input/edit text into input element

- When we want to change the state/ value in the REACT , we will not prefer regular Js variables, rather we will create variable that are specific for REACT

- REACT variables are a kind of state/local variables inside REACT, meaning REACT will always keeps an eye watching those variables, every change made to these variables will be noted by REACT.

- Every component in REACT maintains a State
- These REACT state variables are created using HOOKS in REACT
- HOOKs are nothing but functions

- useState()
- A Hook used to create local state variables in REACT
- provided by REACT library (named import from react)
- useState() returns a array, that consists of two elements: arr[0] = state variable and arr[1] = function to update state variable
- Default value of the state variable came be specifed by passing as argument to useState() hook
