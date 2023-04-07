import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="flex py-10 text-white">
			<div className=" flex items-center  ">
				<div className="w-1/3 text-center ">
					<div className="text-lg font-bold mb-4 flex-row">Hello! I am FEL</div>
					<div className="text-gray-600 text-white flex border-white border-4 border-solid p-4 rounded-2xl">
						<p className="">
							I have an interest in programming languages and software
							development. Currently, I am primarily learning languages such as
							JavaScript and HTML/CSS. Additionally, I am interested in areas
							such as data analytics, machine learning, and web development. I
							am continuously learning and trying to improve myself every day.
						</p>
					</div>
				</div>
				<div className="w-1/3 flex  justify-center">
					<img src="/gokhan.png" alt="me" className="" />
				</div>
				<div className="text-white">
					<div>
						<p className="text-lg font-bold">Name</p>
						<p>GOKHAN CALISKAN</p>
						<p className="text-lg font-bold">AGE</p>
						<p>28</p>
						<p className="text-lg font-bold">Location</p>
						<p>TEKIRDAG / TURKIYE</p>
					</div>
					<div className="flex w-1/2 gap-2 ">
						<Link
							target="_blank"
							to="https://www.linkedin.com/in/gokhan-caliskan/"
						>
							<img src="/Linkedin.svg" alt="" />
						</Link>
						<Link
							target="_blank"
							to="https://www.youtube.com/@felgokhancaliskan"
						>
							<img src="/Youtube.svg" alt="" />
						</Link>
						<Link target="_blank" to="https://github.com/gokhancaliskan">
							<img src="/Github.svg" alt="" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
