import React, { useState } from "react";

function Contact() {
	const [formState, setFormState] = useState({});

	const handleChange = (event) => {
		setFormState({
			...formState,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const config = {
			SecureToken: "4082c671-9f52-4524-aa8b-947e44347df5",
			To: "gokhancaliskan@frontendlearner.com",
			From: formState.email,
			Subject: formState.name,
			Body: formState.message,
		};
		if (window.Email) {
			window.Email.send(config).then(() => alert("Email Sent Succesfully"));
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				value={formState.name || ""}
				onChange={handleChange}
				placeholder="Your name"
			/>
			<input
				type="email"
				name="email"
				value={formState.email || ""}
				onChange={handleChange}
				placeholder="Your email"
			/>
			<textarea
				name="message"
				value={formState.message || ""}
				onChange={handleChange}
				placeholder="Your message"
			/>
			<input type="submit" value="Send Email"></input>
		</form>
	);
}

export default Contact;
