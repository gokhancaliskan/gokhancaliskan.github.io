import React, { useState } from "react";
import { NavbarItems } from "../components/Navbar/NavbarItems";
import "../components/Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [activeIndex, setActiveIndex] = useState(false);

	const handleClick = (index) => {
		setActiveIndex(index);
	};
	return (
		<div className="navbar">
			<Link onClick={() => handleClick(false)} to="/" className="logoborder">
				<img src="/FEL.svg" className="logo" />
			</Link>
			<ul className="main-container">
				{NavbarItems.map((item, index) => (
					<Link
						to={item.url}
						onClick={() => handleClick(index)}
						key={index}
						className={index === activeIndex ? "active" : "inactive"}
					>
						<div
							className={
								index === activeIndex
									? "active-selection"
									: "inactive-selection"
							}
							onClick={() => handleClick(index)}
						>
							{item.title}
						</div>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
