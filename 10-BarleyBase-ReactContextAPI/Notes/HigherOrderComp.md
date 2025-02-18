# Higher Order Components

- A Higher-Order Component (HOC) is an advanced React pattern used for reusing component logic.
- It is a function that takes a component as an argument and returns a new component with additional props or functionality.
- HOCs are not a part of the React API but a design pattern based on Higher-Order Functions in JavaScript.

## Why Use HOCs?

- Code Reusability – Share logic across multiple components without duplication.
- Separation of Concerns – Keep UI components clean and let HOCs handle additional logic.
- Enhancing Components – Add features like authentication, logging, or API calls without modifying the original component.

## Syntax :

```JS
const withExtraInfo = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} extraInfo="Some Extra Data" />;
  };
};

```

- `withExtraInfo` is the HOC function.
- `WrappedComponent` is the original component that will be enhanced.
- The HOC returns a new component with additional props (**withExtraInfo** in this case).

### Example : A HOC for Logging Props

- Let's create a HOC that logs the props of any component.

**Step 1: Create a HOC function.**

```JS
import React from "react";

const withLogger = (WrappedComponent) => {
return (props) => {
  console.log("Props received:", props);
  return <WrappedComponent {...props} />;
};
};

export default withLogger;
```

**Step 2: Create a Component to Use with HOC**

```JS
const UserProfile = ({ name }) => {
  return <h2>User: {name}</h2>;
};
```

**Step 3: Wrap Component with HOC**

```JS
import withLogger from "./withLogger";

const EnhancedUserProfile = withLogger(UserProfile);

```

**Step 4: Use the Enhanced Component**

```JS
export default function App() {
  return <EnhancedUserProfile name="Anand" />;
}

```

- Now, every time EnhancedUserProfile is rendered, the console logs:

```
Props received: { name: 'Anand' }
```

## When to Use HOCs

- When multiple components need shared logic.
- When you want to keep components clean while adding additional features.
- When you want to apply cross-cutting concerns (e.g., logging, authentication, caching).

## Alternatives to HOCs

- With modern React, Hooks (useEffect, useContext, useState, etc.) often replace HOCs for logic reuse.
- But HOCs are still useful in certain cases, like working with class components or third-party libraries.
