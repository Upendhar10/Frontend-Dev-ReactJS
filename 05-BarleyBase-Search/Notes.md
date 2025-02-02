# BarleyBase - Search

## `Named export`, `Default export`, and `* as export`?

- ES6 provides us the facility to import & export a module and use it in other files.
- ES6 provides two ways to export a module from a file: `Named export` and `default export`.

### Exporting

1. export default functionalComponentName;
   - only exports single functionalComponent at once.
   - If the file consists of multiple functionalComponent, we can use this
2. export Specific functionalComponent
   - we should include export keyword before the functionalComponent definition, in order to export individual component

### Importing

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

### `Named export` :

- In `Named export`, one can have multiple named exports per file. then, `Named export` imports the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.
  In `Named export`, the component is exported from MyComponent.js file like:

```javascript
export const MyComponent = () => {};
export const MyComponent2 = () => {};
```

and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.

```javascript
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

### `Default export` :

- In `Default export`, One can have only one default export per file.
- The naming of import is completely independent in default export and we can use any name we like.
- In `Default export`, the component is exported from MyComponent.js file like:

```javascript
const MyComponent = () => {};
export default MyComponent;
```

and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.

```javascript
import MyComponent from "./MyComponent";
```

In `* as export`, it is used to import the whole module as a component and access the components inside the module.

In `* as export`, the component is exported from MyComponent.js file like:

```javascript
export const MyComponent = () => {};
export const MyComponent2 = () => {};
export const MyComponent3 = () => {};
```

and the component is imported from MyComponent.js file like:

```javascript
import * as MainComponents from "./MyComponent";
```

Now we can use them in JSX as:

```javascript
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```

We can use `Named export` and `Default export` together. So you should export like:

```javascript
export const MyComponent2 = () => {};
const MyComponent = () => {};
export default MyComponent;
```

and import like:

```javascript
import MyComponent, { MyComponent2 } from "./MyComponent";
```

## Importance of `config.js` file

- `config.js` files are essentially editable text files that contain information required for the successful operation of a program.
- The files are structured in a particular way, formatted to be user configurable.
- Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces.
- Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user.
- For example:

```
Bhagat
```

Usually, though an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:

```
NAME='Bhagat'
SURNAME='Singh'
```

## `React Hooks`

- In React version 16.8, React introduced a new pattern called Hooks.
- React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.
- Hooks can be stateful and can manage side-effects.
- Hooks allow us to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

### React provides a bunch of standard in-built hooks:

- `useState`:
  - To manage states
  - Returns a stateful value and an updater function to update it.
- `useEffect`:
  - To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- `useContext`:
  - To return the current value for a context.
- `useReducer`:
  - A useState alternative to help with complex state management.
- `useCallback`:
  - It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- `useMemo`:
  - It returns a memoized value that helps in performance optimizations.
- `useRef`:
  - It returns a ref object with a current property.
  - The ref object is mutable.
  - It is mainly used to access a child component imperatively.
- `useLayoutEffect`:
  - It fires at the end of all DOM mutations.
  - It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- `useDebugValue`:
  - Helps to display a label in React DevTools for custom hooks.

## `useState Hook` in React.

- UseState() is a function that allows us to create State variable in React.
- React only keep track of the State variables by itself.
- - The `useState hook` is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries.

- UseState returns a new array of State variables

  - variable at arr[0]
  - function at arr[1]

  - const [count, setCount] = useState();
  - we can pass the default value of the state variable 'count' , useState(0);
  - we specfiy what should be done once the state variable is updated in the 'setCount' function

### Doubt : Why there is a need for State Variables

- If we use `let` instead of `const`, while declaring, then we possible change the value of the variable but that change will not be impacted in the UI.

- It is observed that for every state change the UI is updated meaning the `UseState()` hook is called, But the ambugity araises that how the `useState()` remembers the updated value of `count` rather than the default value ?,
- The answer is because of the concept of clousure in Javascript.
- If we observe particularly, `useState()` will be called only, if the already present data/content is different from the updated content.
- `useState()` is an asynchronous function

#### Syntax for useState hook

```javascript
const [state, setState] = useState(initialstate);
```

#### Importing: To use useState you need to import `useState` from react as shown below:

```javascript
import React, { useState } from "react";
```

we can use Hooks in Functional Components

```javascript
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
};
```

### Example

```javascript
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
```

## Building Seach-bar Feature

- React has a one-way data binding feature
- input tag in HTML and input tag in REACT behaviours little different
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
- Default value of the state variable can be specifed by passing as argument to useState() hook
