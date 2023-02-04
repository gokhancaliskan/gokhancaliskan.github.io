import React from "react";
import "../components/About/About.css";
import { AboutItems } from "../components/About/AboutItems";

const About = () => {
	return (
		<div className="aboutpage">
			<div className="about">
				<h1 className="hello">Hello! I am FEL</h1>
				<p className="aboutme">
					My name is Gokhan CALISKAN. I have an interest in programming
					languages and software development. Currently, I am primarily learning
					languages such as JavaScript and HTML/CSS. Additionally, I am
					interested in areas such as data analytics, machine learning, and web
					development. I am continuously learning and trying to improve myself
					every day.
				</p>
				<div className="social">
					{AboutItems.map((item, index) => (
						<li key={index}>
							<a href={item.url} target="_blank" className={item.cName}>
								<img src={item.title}></img>
							</a>
						</li>
					))}
				</div>
			</div>
			<div className="image">
				<img src="/image.svg" className="svg"></img>
			</div>
		</div>
	);
};

export default About;
