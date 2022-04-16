import React from "react";
import "./Home.css";
import Slider from "../components/Slider/Slider";

export const Home = () => {
  return (
    <div className="home-back">
      <Slider />
      GÖKHAN ÇALIŞKAN
      <CategoryList />
    </div>
  );
};

export const CategoryList = () => {
  return <div>sad</div>;
};
