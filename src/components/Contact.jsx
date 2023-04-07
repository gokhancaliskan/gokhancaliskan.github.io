import React from "react";

export const Contact = () => {
	return (
		<div className="py-8">
			<div className="container px-4 mx-auto flex text-center  justify-evenly">
				<h2 className="text-5xl font-bold flex flex-wrap content-center  text-white mb-8">
					CONTACT ME
				</h2>
				<div className="flex justify-center">
					<form className="max-w-lg w-full">
						<div className="grid grid-cols-2 gap-4">
							<input
								type="text"
								className="bg-gray-900 text-white py-3 px-4 rounded-lg focus:outline-none"
								placeholder="NAME"
							/>
							<input
								type="text"
								className="bg-gray-900 text-white py-3 px-4 rounded-lg focus:outline-none"
								placeholder="SURNAME"
							/>
						</div>
						<input
							type="email"
							className="bg-gray-900 text-white py-3 px-4 rounded-lg mt-4 w-full focus:outline-none"
							placeholder="E-MAIL "
						/>
						<textarea
							className="bg-gray-900 text-white py-3 px-4 rounded-lg mt-4 w-full h-24 focus:outline-none resize-none"
							placeholder="MESSAGE"
						></textarea>
						<button
							type="submit"
							className="bg-blue-500 text-white py-3 px-6 rounded-lg mt-4 font-bold hover:bg-blue-600 transition duration-300"
						>
							SUBMIT
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Contact;
