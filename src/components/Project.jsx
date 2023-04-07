import React, { useEffect, useState } from "react";

const Project = () => {
	const ProjectItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const [currentPage, setCurrentPage] = useState(1);
	const [rows, setRows] = useState([]);
	useEffect(() => {
		setRows(
			ProjectItems.reduce((acc, item, index) => {
				const row = Math.floor(index / 4);

				if (!acc[row]) {
					acc[row] = [];
				}
				acc[row].push(item);

				return acc;
			}, [])
		);
	}, []);
	return (
		<div className=" flex flex-col items-center py-8">
			<div className="flex flex-col ">
				<h1 className="text-5xl font-bold flex justify-center text-white">
					PROJECTS
				</h1>
				<div
					className="flex
				"
				>
					<button
						className="bg-white hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
						onClick={() => {
							setCurrentPage(
								currentPage === 0 ? rows.length - 1 : currentPage - 1
							);
						}}
					></button>
					<div className="flex flex-col items-center justify-center text-white">
						{rows.map((row, index) => (
							<div
								key={index}
								className="flex items-center justify-center"
								style={{ display: index === currentPage ? "flex" : "none" }}
							>
								{row.map((item, subIndex) => (
									<div
										className="bg-gray-800 rounded-lg shadow-md m-4 p-6"
										key={subIndex}
									>
										<img
											src={item.image}
											alt={item.title}
											className="w-32 h-32 rounded-full mx-auto mb-4"
										/>
										<h3 className="text-xl font-bold mb-2">{item.title}</h3>
										<p className="text-gray-400">{item.description}</p>
										<a
											href={item.link}
											className="text-blue-500 mt-4 inline-block"
										>
											Devamını oku
										</a>
									</div>
								))}
							</div>
						))}
					</div>

					<button
						className="bg-white hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
						onClick={() => {
							setCurrentPage(
								currentPage === rows.length - 1 ? 0 : currentPage + 1
							);
						}}
					>
						{/* Button left icon */}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Project;
