import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { useNavigate } from "react-router-dom";

import "./Navi.css";

const Navi = () => {
  const location = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked((prev) => !prev);

  return (
    <nav className="NaviItems">
      <h2 className="navi-logo">
        <i className="fas fa-laptop-code"></i> FEL
      </h2>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} onClick={() => location(item.url)}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <i className="fas fa-search"></i>
    </nav>
  );
};

export default Navi;
