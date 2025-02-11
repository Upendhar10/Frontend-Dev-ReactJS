# BarleyBase - Custom Hooks

## Single Responsibility Principle ?

- If we have a function, a class, or a single entity in our app, it should have a single responsibility.
- For example, `<Header>` component in our app should have only one responsibility i.e. to display the header on the application.
- If we have a component which is doing multiple things, then we should divide that component into multiple components where each one of them has a single responsibility.
- Breaking down the code into small modules -> Modularity

## Hooks

- A hook is nothing but a utility function.Hooks are reusable functions.
- When you have component logic that needs to be used by multiple components, we can extract that logic to a custom hook.
- A custom hook in React is a JavaScript function that allows you to extract and reuse logic **involving stateful behavior** and side effects from function components.
- Custom hooks enable you to encapsulate common logic in a way that can be shared across multiple components, promoting code reuse and better organization.
- Hooks returns a value, where as Function returns a JSX.
- We cannot create a State Variables and Functions in a Normal function, so we are use Hooks.
- Hooks are tracked by React, where as Normal functions are not tracked by React.

## Why use custom hooks ?

1. **Code Reusability**: Custom hooks allow you to reuse stateful logic across different components without duplicating code.
2. **Cleaner Components**: By extracting complex logic into custom hooks, you can keep your components smaller and more focused on rendering.
3. **Separation of Concerns**: Custom hooks help separate the logic from the UI, making your code easier to manage and understand.

- When dealing with State Variables and Functions, always try to thik in terms of Hooks, try to come up with Custom Hooks for each separate task.

### Best Practises

- It is a naming convention for to write custom hooks with prefix `use` which is followed by most of the companies.
- A lot of companies use a linter which throws an error if the custom hooks are not named like this.
- It is a good practice to use the word use while naming the custom hook.
- If someone else sees the code, they will get to know that this is not a normal function but a React hook.

---

## Bundler Level Optimizations

- When we are building a large-scaled application, it is important to break it down into different components (Bundles).
- **Parcel** is a bundler, it bundles the code into a single Javascript file.
- Having a single bundle will make our app slower since a single bundle will contain all the code of the application which takes a lot of time to load.
- The solution for this is to split our app into smaller chunks (bundles).
- This process is known as below terms:
  1. Chunking
  2. Code Splitting
  3. Dynamic Bundling
  4. Lazy Loading
  5. On demand loading

### Example:

- If we are developing an e-commerce application.
- This ecommerce app will have a **Cart** which will contain different functionalities. So we can create a separate bundle for the **Cart** component.
- This bundle will not be loaded initially. It will be loaded only when the user visits the cart page.
- That means, with this approach the app will have 2 bundles. One would be a normal bundle which contains all the code of the app except the **cart** component. This bundle will be loaded when the user visits our app.
- The other bundle will contain the code of the **cart** component which will be loaded only when the user visits the shopping cart. That is why this process is also known as on **demand loading**.

### When and why do we need `lazy()` ?

- In simpler terms, **lazy loading** is a design pattern.
- It allows you to load parts of your application on demand to reduce the initial load time.
- For example, you can initially load the components and modules related to user login and registration. Then you can load the rest of the components based on user navigation.
- You might not feel much difference when using lazy loading for small-scaled applications. But it significantly impacts large scaled applications by reducing the initial load time.
- Ultimately it improves both the use experience and application performance.

### Advantages of Lazy loading

1. Reduces the initial load time by reducing the bundle size.
2. Reduces browser workload.
3. Improves application performance in low-band width situations.
4. Improves user experience at initial loading.
5. Optimizes resource usage.

### Disadvantages of lazy loading

1. Not suitable for small scale applications.
2. Placeholder can slow down quick scrolling.
3. Requires additional communication with the server to fetch
   resources.
4. Can affect SEO and ranking.

### Implementation:

```javascript
// Without Lazy loading
import About from "./About";

// With React.lazy()
const About = React.lazy(() => import("./About"));
```

- When we use `lazy()` on a component which fetches the API response, React can give us an error i.e. A component suspended while responding to synchronous input.
- To avoid or handle this error, React offers a component i.e. **Suspense**.

### Suspense Component

- `<Suspense> </Suspence>` is a built-in React component which lets you temporarily render a fallback UI while its children are still loading.
- This `<Suspense>` component has a property i.e. `fallback` which takes the component which must be rendered until we get the API response in this case, It can accepts any piece of JSX
- This `fallback` UI could be a shimmer UI as well.
- We can just wrap the lazy loaded component inside the `<Suspense></Suspense>` component to implement this performmance Optimization.

### When and why do we need Suspense ?

- Suspense is best used when you want to display a fallback while waiting for something to load.
- The two main use cases for using `Suspense` are when you are waiting for data to be fetched from an API after the initial page load and when you are lazy loading other React components.

### Best Practise

- Never ever dynamically load componentsusing `lazy()` inside other components, because if we use `lazy()` load, when this dynamically loaded component is loaded everytime the main component is re-rendered, which hampers the performance.
