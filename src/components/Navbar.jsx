import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="p-2 mx-9 flex justify-evenly">
			<img src="/FEL.svg" className="h-14" />

			<div className="flex gap-5">
				<Link className="text-white text-3xl font-bold  ">HOME</Link>
				<Link className="text-white text-3xl font-bold ">BLOGS</Link>
				<Link className="text-white text-3xl font-bold ">PROJECTS</Link>
				<Link className="text-white text-3xl font-bold ">CONTACT</Link>
			</div>
		</div>
	);
};
export default Navbar;
