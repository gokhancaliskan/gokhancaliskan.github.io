import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
	return (
		<div className="page">
			<Navbar />
			<div className="area">
				<div className="header">
					<Link to="" className="headtext">
						GOKHAN CALISKAN
					</Link>
				</div>
				<div className="separator">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
export default Layout;
