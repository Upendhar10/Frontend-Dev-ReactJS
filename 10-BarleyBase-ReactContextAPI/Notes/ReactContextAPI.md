# React Context API

- The Context API is a built-in feature in React that allows data to be shared across the component tree without manually passing props at every level (avoiding Prop Drilling).
- It provides a way to manage global state efficiently without using third-party libraries like Redux.

## Core Idea of Context API

- Create a Context – Define a shared state and functionality.
- Provide the Context – Wrap the parent component with a Provider to make data available.
- Consume the Context – Use the `useContext()` hook to access the context in any component

## Implementation

### Step 1 : Create the Context

- Define a Context using the `React.createContext()` method.
- This method returns a context object with two properties: `Provider` and `Consumer`.

```JS
import React, { createContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

```

### Step 2 : Provide the Context in the App Component

- Wrap your application inside the Provider component.
- Pass the context value to the Provider component using the `value` prop.
- The Provider component will make the context available to its child components.

```JS
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemedComponent from "./ThemedComponent";

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;

```

### Step 3: Consume Context using `useContext()`

- Any component can now access the shared state.

```JS
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;

```

## Advantages of Context API

- ✔ Eliminates Prop Drilling – No need to manually pass props through multiple levels.
- ✔ Simpler than Redux – No boilerplate, reducers, or actions required.
- ✔ Built-in & Lightweight – Comes with React, no need for extra dependencies.
- ✔ Easier Global State Management – Ideal for managing themes, authentication, and settings.

## Limitations of Context API

- ❌ Performance Issues – Context updates re-render all consumers, which may cause inefficiencies.
- ❌ Not Ideal for Frequent Updates – Not suited for managing rapidly changing states (e.g., real-time chat apps).
- ❌ Complexity for Large Apps – Managing multiple contexts can get messy compared to Redux or Zustand.
- ❌ Difficult Debugging – Hard to trace context state changes across deeply nested components.

## Built-in and Third-party Alternatives to Context API

| Type        | Alternative             | Use Case                                                  |
| ----------- | ----------------------- | --------------------------------------------------------- |
| Built-in    | Props                   | Best for simple parent-child communication                |
| Built-in    | useReducer + useContext | Used for better state management with complex logic       |
| Third-party | Redux                   | Large-scale applications with structured state management |
| Third-party | Recoil                  | Simpler alternative to Redux with better performance      |
| Third-party | Zustand                 | Lightweight state management for smaller apps             |
| Third-party | Jotai                   | Minimal state management using atomic stores              |

## When to Use Context API vs Redux/Zustand?

| Use Case            | Use Context API | Use Redux/Zustand |
| ------------------- | --------------- | ----------------- |
| Theme Switching     | ✅ Yes          | ❌ No             |
| User Authentication | ✅ Yes          | ❌ No             |
| Language Selection  | ✅ Yes          | ❌ No             |
| E-commerce Cart     | ❌ No           | ✅ Yes            |
| Real-time Chat      | ❌ No           | ✅ Yes            |
| Financial Dashboard | ❌ No           | ✅ Yes            |
