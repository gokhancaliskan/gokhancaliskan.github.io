import React, { useEffect, useState } from "react";
import "./Projects.css";
import { ProjectsItems } from "./ProjectsItems";

const Projects = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [rows, setRows] = useState([]);

	useEffect(() => {
		setRows(
			ProjectsItems.reduce((acc, item, index) => {
				const rowIndex = Math.floor(index / 3);

				if (!acc[rowIndex]) {
					acc[rowIndex] = [];
				}
				acc[rowIndex].push(item);

				return acc;
			}, [])
		);
	}, []);
	const currentRow = rows[currentPage] || [];
	return (
		<div className="projectpage">
			<div className="projects">
				{rows.map((row, index) => (
					<div
						key={index}
						className="edge"
						style={{ display: index === currentPage ? "flex" : "none" }}
					>
						{row.map((item) => (
							<div className="inneredge" key={item}>
								{item}
							</div>
						))}
					</div>
				))}
			</div>

			<div className="arrows">
				<button
					className="button-right"
					style={{ display: currentPage === 0 ? "none" : "flex" }}
					onClick={() => setCurrentPage(currentPage - 1)}
				></button>
				<button
					className="button-left"
					style={{
						display: currentPage === rows.length - 1 ? "none" : "flex",
					}}
					onClick={() => setCurrentPage(currentPage + 1)}
				></button>
			</div>
		</div>
	);
};

export default Projects;
