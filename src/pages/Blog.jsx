import React, { useEffect, useState } from "react";
import "./Blog.css";
import { BlogItems } from "../components/Blog/BlogItems";

const Projects = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [rows, setRows] = useState([]);

	useEffect(() => {
		setRows(
			BlogItems.reduce((acc, item, index) => {
				const rowIndex = Math.floor(index / 4);

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
		<div className="blogpage">
			<div className="postarea">
				{rows.map((row, index) => (
					<div
						key={index}
						className="postedge"
						style={{ display: index === currentPage ? "flex" : "none" }}
					>
						{row.map((item) => (
							<div className="posts" key={item}>
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
