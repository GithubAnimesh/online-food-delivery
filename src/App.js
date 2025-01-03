import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStrore";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = { name: "Animesh singh" };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
        <UserContext.Provider value={{ name: userName }}>
          <Footer />
        </UserContext.Provider>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
