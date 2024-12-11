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
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Applayout = () => {
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div>
      <UserProvider>
        <Navbar />
        <Outlet />

        <Footer />
      </UserProvider>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/Swiggy_Clone",
    element: <Applayout />,
    children: [
      {
        path: "/Swiggy_Clone",
        element: <Body />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "offer",
        element: <Offer />,
      },
      {
        path: "restaurant/:resId",
        element: <RestInfo />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
