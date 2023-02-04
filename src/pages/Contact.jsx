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
		Email.send({
			SecureToken: "4082c671-9f52-4524-aa8b-947e44347df5",
			To: "gokhancaliskan@frontendlearner.com",
			Subject: formState.name,
			From: formState.email,
			Body: formState.message,
		}).then(() => alert("Email Sent Succesfully"));
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
				type="text"
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
