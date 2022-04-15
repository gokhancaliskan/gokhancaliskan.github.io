import React from "react";
import "./Home.css";
import "swiper/css/navigation";
import Corousel from "../components/Corousel/Corousel";

export const Home = () => {
  return (
    <div className="home-back">
      <Corousel />
      GÖKHAN ÇALIŞKAN
      <CategoryList />
    </div>
  );
};

export const CategoryList = () => {
  return <div>sad</div>;
};
