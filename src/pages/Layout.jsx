import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import BlogCard from "../components/BlogCard";
import Project from "../components/Project";
import Contact from "../components/Contact";

export const Layout = () => {
	return (
		<div className="bg-white flex flex-col min-h-screen">
			<div className="bg-gray-800 shadow-md">
				<nav className="container py-3 ">
					<Navbar />
				</nav>
			</div>
			<div className="container mx-auto my-16 px-4 grow">
				<div className="bg-gray-800 rounded-lg shadow-lg px-8 py-10 divide-y divide-dashed">
					<div>
						<About></About>
					</div>
					<div>
						<BlogCard></BlogCard>
					</div>
					<div>
						<Project></Project>
					</div>
					<div>
						<Contact></Contact>
					</div>
				</div>
			</div>
			<div className="bg-gray-800 text-white text-center py-4">
				<p>GOKHAN CALISKAN</p>
			</div>
		</div>
	);
};
export default Layout;
