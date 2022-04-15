import React from "react";
import { useRoutes } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Social } from "./pages/Social";
import { Story } from "./pages/Story";
import { Home } from "./pages/Home";
import Navi from "./components/navbar/Navi";
import Footer from "./components/footer/Footer";

export const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/blog", element: <Blog /> },
    { path: "/social", element: <Social /> },
    { path: "/story", element: <Story /> },
  ]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navi />
      {routes}
      <Footer />
    </div>
  );
};
