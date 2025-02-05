# BarleyBase - Routing

## UseEffect Hook

- If no dependencies array is specified then, useEffect is called after very state change.

  > flow : render -> useEffect => state change or UI change => render -> useEffect

- If dependencies array is specified as empty array then, useEffect is called only once after initial render
  > flow : render -> useEffect => state change or UI change => render
- If dependencies array is specified as non-empty array then, useEffect is called only after every time the dependency array is modified.
  > flow : render -> useEffect => dependency array modifies => render -> useEffect
  > flow : render -> useEffect => non-dependency array/ UI modifies => render

## Key points :

- Never create a component inside another component, rather create it outside and render in that component. (Component composition )
- Never write a `useState()` inside a if-else statement and any loop for that matter because it leads to inconsistent behavior.
- `UseState()` is a hook used to create local state variable in React inside the functional components, so never use `useState()` outside the functional components.
- Every hook in React starts with `use` prefix.

- Shimmer can also be implemented using a Shimmer npm package

## How to add media into your app

1. **Use the `import` keyword**

```javascript
import ResImg from "./ResImg.jpg";

const Logo = () => {
  return (
    <div className="logoDiv">
      <img src={ResImg} />
    </div>
  );
};
```

2. **Using public folder**

- If we want to reference images in the public folder, we can do so without importing them explicitly.
- This method is useful for handling large image assets or for dynamic image URLs.
- Place you image in the public directory and Then reference it in your code.
  > -> public/my-img.jpg

```javascript
<img src={process.env.PUBLIC_URL + ‘/my-img.jpg’} />
```

3. **Loading images from a remote source**

- We can load images from a remote source, such as an external URL or a backend API, by specifying the image url directly in our img tag.

```
const img = ‘https://example.com/img.jpg’;
<img sec={img} />

```

4. **Using assets within css**

- We can also use images as our background images or in other css styling

```css
.img-cont {
  background-image : url('/my-img.jpg');
  width:300px,
  height:200px
}
```

## SPA - Single Page Application

- In earlier days, inorder to render every page of the application, we are required to make multiple network calls to render elements, but with the SPA , we are not required to make multiple network calls to render elements.

- The problem with `<a>` tag is that it refreshes the whole page every time, we click it.
- This is the reason why we use React Router.

## Routing in React App

- React router DOM package is used to implement routing in React App
- Routing refers to redirection of controlling to differnt pages or sub urls within the app
- In order to create routes in React, we use `createBrowserRouter()` router from `react-router-dom`
- Two types of routing:

  - 1. Server-side routing
  - 2. Client-side routing

- In SPA, the app does not make any network calls while navigating from one page to another (components).Everything happens on the client side. This is called Client Side Routing.
- In the server side routing, when a user navigates to a path, the browser will reload, make a network call, get the page from the server, and then show it on the UI.
- This is the benefit of single page applications. We have all the components on the client side. They just get interchanged based on the route.

### Creating Router Configuration

```javascript
const AppRouter = CreateBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorUI />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```

- But just creating the configuration is not enough. We will have to provide this configuration to render it on to the page.
- To do that, we use `RouterProvider` which will provide the routing configuration to the app.

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
```

- We also need a component which will be shown whenever a user tries to access an anonymous path.
- React-router-dom also provides a hook i.e. `useRouteError()` which gives all the information about the route error. We can show this information to the user on UI.

### `Link` in React-router-dom

- In SPA, `<Link>` tag is used to create links in React provided by `react-router-dom`
- React-router-dom keeps track of the `Link` tag in React, similar to how react keeps track of local State variables.
- `<a>` tag refreshes the whole page every time, we click it, but <Link> tag only redirects to the path, and doesn't reload the whole page.
- We cannot see the `Link` tag in the DOM, it will be converted into `<a>` tag by the `react-router-dom`.

```javascript
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
```

### Nested Routing

- Defining Routes inside another Route
- In order to do Nested Routing in React, we use `<Outlet/>` component and children key in `createBrowserRouter()` configuration

- `<Outlet/>` is used as a placeholder to fill dynamic routes.
- `<Outlet/>` should be created in the parent for displaying children elements.

```javascript
const Approuter = createBrowserRouter([
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorUI />,
    children: [
      {
        path: "techstack",
        element: <Techstack />,
      },
    ],
  },
]);
```

```
url: localhost::3000/about/techstack
```

---

### Dynamic Routing

- In order to do Dynamic Routing in React, we use `useParams()` hook from `react-router-dom`
- `useParams()` hook returns a value which contains the `id` value from the URL params.
- - We can extract this `brewId` using this hook.

```javascript
const Approuter = createBrowserRouter([
  {
    path: "/brewery/:brewId",
    element: <Brewery />,
    errorElement: <ErrorUI />,
  },
]);
```

```javascript
const { resId } = useParams();
```

---

## What would happen if we do `console.log(useState())`?

- It will display the result of calling the `useState()` function in our browser’s developer console.

```javascript
const [count, setCount] = useState(0);

console.log(useState());

// Output :

[0, function]
```

---

# Resources:

- React Router DOM - https://reactrouter.com/en/main
- Client Side Routing - https://reactrouter.com/en/main/start/overview
- Formik - https://formik.org/
