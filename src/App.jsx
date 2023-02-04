import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {
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
					<Routes>
						<Route path="/" element={<About />}></Route>
						<Route path="/projects" element={<Projects />}></Route>
						<Route path="/blog" element={<Blog />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
