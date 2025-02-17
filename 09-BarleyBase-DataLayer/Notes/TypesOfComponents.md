# Stateful vs Stateless Components

- In React, a component can be either stateful or stateless.
- Stateful components maintain their own state, while stateless components rely on props for data.
- Stateful components are often used for complex logic and behavior, while stateless components are simpler and more reusable.

## Stateful Component

```JS
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};

export default Counter;

```

- This component maintains its own state (count), making it a stateful component.

## Stateless Component

```JS
import React from "react";

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;

```

- This component doesn’t maintain state and relies on props, making it a stateless component.

---

# Controlled Vs Uncontrolled Components in React

- Controlled Components are components, whose form data (such as input fields) is controlled by React state.
- Uncontrolled Components are components where the form data is handled by the DOM itself, and React doesn't directly manage the state.

## Controlled Components

- In a controlled component, the value of the input field is controlled by React state.
- This means that every time the input changes, React is responsible for updating and keeping track of the value.
- Controlled Components are preferred in modern React because they allow easy access to form data and can be directly integrated with React’s state and lifecycle.

```JS
import React, { useState } from "react";

const ControlledComponent = () => {
  const [value, setValue] = useState(""); // State to manage input value

  const handleChange = (e) => {
    setValue(e.target.value); // Update the state when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={value} // The input value is bound to React state
          onChange={handleChange} // Event handler updates the state
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledComponent;

```

- In this example:
  - The input field’s value is controlled by the value state.
  - Whenever the input changes, the handleChange function updates the state.

## Uncontrolled Components

- In an uncontrolled component, the form data is handled by the DOM itself.
- React doesn't keep track of the input value, and we interact with the input field using refs.
- Uncontrolled Components may be useful when you need to integrate with non-React code or when you don’t need to manage the input state at all.

```JS

import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef(null); // Create a ref to reference the input element

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${inputRef.current.value}`); // Get the value from the DOM directly
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          ref={inputRef} // Attach ref to the input element
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponent;

```

- In this example:
  - The input field’s value is managed by the DOM, not React state.
  - We access the value through inputRef.current.value on form submission.

# Key Takeaways

- Controlled vs. Uncontrolled Components : deal mostly with form inputs and UI elements.
- Stateful vs. Stateless Components : refer to how components manage state in general.
- A controlled component is always stateful, but a stateful component is not necessarily controlled.
- An uncontrolled component is always stateful (managed by the DOM), but not by React.

# Mega Comparison

| Feature          | Controlled Component                                           | Uncontrolled Component                                                   | Stateful Component                                 | Stateless Component                                |
| ---------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------- | -------------------------------------------------- |
| Definition       | A component where React state controls the value and behavior. | A component where the DOM itself manages state.                          | A component that maintains its own internal state. | A component that does not manage its own state.    |
| State Management | Managed via React state (useState, useReducer).                | Managed by the DOM, accessed via useRef.                                 | Uses useState or useReducer internally.            | Receives all data via props from a parent.         |
| Data Flow        | Parent -> Child (React fully controls updates).                | Directly handled by the browser (React doesn’t track changes).           | Internal to the component.                         | Comes from props (parent component).               |
| Mutability       | React manages and updates the value.                           | The DOM manages the value, React doesn’t interfere.                      | State changes inside the component.                | No state changes inside the component.             |
| Reactivity       | Fully reactive; updates trigger re-renders.                    | Non-reactive; React doesn’t track changes automatically.                 | React updates component when state changes.        | Renders only when props change.                    |
| Use Case         | Form inputs (`<input>, <textarea>`).                           | File inputs (`<input type="file">`), uncontrolled modals, media players. | Counter, modals, toggles.                          | Display-only components (e.g., UI buttons, icons). |
| Example          | `<input value={state} onChange={handleChange} /> `             | `<input ref={inputRef} />`                                               | A counter component managing its count.            | A simple button receiving onClick from the parent. |
