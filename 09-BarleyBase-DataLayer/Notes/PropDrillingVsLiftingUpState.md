# Prop Drilling Vs Lifting Up the State

- Both Prop Drilling and Lifting State Up deal with state and data flow in React applications.
- However, they solve different problems and are often misunderstood as the same thing.

## 🎯 Are They the Same?

- No.
- Prop Drilling is a problem that occurs when passing props deep down.
- Lifting State Up is a solution to share state among multiple components efficiently.

## Lifting Up the State

- Lifting state up means moving state to a common ancestor (parent) so that multiple child components can share and access it.

### Why do we do this?

- When two or more child components need to share the same state.
- Helps in synchronizing data between components.

### Example of Lifting State Up

- Imagine we have two sibling components that both need access to the same state.

```JS
import React, { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child1 count={count} />
      <Child2 setCount={setCount} />
    </div>
  );
};

// Child1 reads the count
const Child1 = ({ count }) => {
  return <h2>Count: {count}</h2>;
};

// Child2 updates the count
const Child2 = ({ setCount }) => {
  return <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>;
};

export default Parent;

```

**How Lifting State Up Solves the Problem:**

- State (count) is stored in Parent.
- Child1 reads the count from Parent.
- Child2 updates the count via Parent.
- Both components share the same state without unnecessary prop passing.

---

## Prop Drilling

- Prop drilling happens when data (props) is passed through multiple layers of components just to reach a deeply nested child—even if intermediate components don’t need the data.

### Why is it a problem?

- Unnecessary passing of props through multiple components.
- Makes the code harder to maintain.
- Causes re-renders in components that don’t need the data.

### Example of Prop Drilling:

- Imagine we have a `Grandparent → Parent → Child` structure, where only the Child needs data but Grandparent holds the state.

```JS

import React, { useState } from "react";

// Grandparent Component
const Grandparent = () => {
  const [message, setMessage] = useState("Hello from Grandparent");

  return <Parent message={message} />;
};

// Parent Component (Doesn't need message but passes it down)
const Parent = ({ message }) => {
  return <Child message={message} />;
};

// Child Component (Actually uses message)
const Child = ({ message }) => {
  return <h2>{message}</h2>;
};

export default Grandparent;

```

**Problem in this Example**:

- Parent doesn’t need `message` but must pass it down to Child.
- If the `message` prop needs to change, all components in between must update.

**Solution for Prop Drilling**

- Instead of passing props manually, use **Context API or Redux** to avoid unnecessary prop passing.

---

## Comparing Prop Drilling and Lifting State Up

| Feature          | Prop Drilling                                       | Lifting State Up                                   |
| ---------------- | --------------------------------------------------- | -------------------------------------------------- |
| Definition       | Passing props through multiple layers               | Moving state to a common ancestor                  |
| Main Issue       | Intermediate components receive unnecessary props   | Components don't have access to shared state       |
| Occurs When?     | A deeply nested component needs data from the top   | Sibling components need to share state             |
| Solution         | Use Context API or Redux                            | Move state to the closest common parent            |
| Example Scenario | Grandparent → Parent → Child (Child needs the prop) | Two sibling components both need access to a state |

---
