import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Breweries from "./components/Breweries";
import Footer from "./components/Footer";
import ErrorUI from "./components/ErrorUI";
import Techstack from "./components/Techstack";

import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import BreweryDetails from "./pages/BreweryDetails";

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
        element: <About />,
        children: [
          {
            path: "techstack",
            element: <Techstack />,
          },
        ],
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
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
