import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Header";
import Body from "./components/Body";
import { UserProvider } from "./utils/UserContextt";
import AboutUs from "./components/About";
import Error from "./components/Error";
import RestInfo from "./components/RestInfo";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import appStore from "./utils/appstore";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createHashRouter,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cart from "./components/Cart";

const Applayout = () => {
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div>
      <Provider store={appStore}>
        <UserProvider>
          <Navbar />
          <Outlet />

          <Footer />
        </UserProvider>
      </Provider>
    </div>
  );
};
const appRouter = createHashRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestInfo />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
