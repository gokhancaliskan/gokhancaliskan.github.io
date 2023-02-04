import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Projects from "./components/Projects/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
	return (
		<Routes history={history}>
			<Route path="/" element={<Layout />}>
				<Route index element={<About />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="/blog" element={<Blog />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Route>
		</Routes>
	);
}

export default App;
