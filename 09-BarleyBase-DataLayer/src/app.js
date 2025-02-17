import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Breweries from "./components/Breweries";
import Footer from "./components/Footer";
import ErrorUI from "./components/ErrorUI";
import Techstack from "./components/Techstack";

// pages
import Cart from "./pages/Cart";
import BreweryDetails from "./pages/BreweryDetails";
import ShimmerUI from "./components/ShimmerUI";

// Lazy Loading or Code Splitting
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="wrapper">
      <Header />
      {location.pathname === "/" && <Hero />}
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorUI />,
    children: [
      {
        path: "/breweries",
        element: <Breweries />,
      },
      {
        path: "/breweries/:brewId",
        element: <BreweryDetails />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>"About" is Loading....</h2>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "techstack",
            element: <Techstack />,
          },
        ],
      },
      {
        path: "/contactUs",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
