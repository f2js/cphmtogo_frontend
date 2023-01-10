import React, {useState} from 'react';
import {signUp} from "../api/User"

export default function SignUpPage() {
	const [userValues, setUserValues] = useState({});
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		let formErrors = {};

		if (!userValues.name) {
			formErrors.name = 'Please enter your name.';
		}

		if (!userValues.lastName) {
			formErrors.lastName = 'Please enter your last name.';
		}

		if (!userValues.username) {
			formErrors.username = 'Please enter a username.';
		}

		if (!userValues.email) {
			formErrors.email = 'Please enter your email.';
		} else if (!/\S+@\S+\.\S+/.test(userValues.email)) {
			formErrors.email = 'Please enter a valid email.';
		}

		if (!userValues.password) {
			formErrors.password = 'Please enter a password.';
		}

		setErrors(formErrors);
		return Object.keys(formErrors).length === 0;
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
		if (validateForm()) {
			// name, lastname, username, email, password
			await signUp(userValues.name, userValues.lastName, userValues.username, userValues.email, userValues.password)
		}
	};

	return (

		<div id="signupContainer" >
		<h1>Sign up</h1>
		<div style={styles.container}>


		<form onSubmit={handleSubmit} style={styles.form}>
			<label htmlFor="signup-name">Name:</label>
			<input
				type="text"
				id="signup-name"
				value={userValues.name}
				onChange={(e) => setUserValues({...userValues, name: e.target.value})}
			/>
			{errors.name && <p className="signup-error">{errors.name}</p>}
			<label htmlFor="signup-lastName">Last name:</label>
			<input
				type="text"
				id="signup-lastName"
				value={userValues.lastName}
				onChange={(e) => setUserValues({...userValues, lastName: e.target.value})}
			/>
			{errors.lastName && <p className="signup-error">{errors.lastName}</p>}
			<label htmlFor="signup-username">Username:</label>
			<input
				type="text"
				id="signup-username"
				value={userValues.username}
				onChange={(e) => setUserValues({...userValues, username: e.target.value})}
			/>
			{errors.username && <p className="signup-error">{errors.username}</p>}
			<label htmlFor="signup-email">Email:</label>
			<input
				type="email"
				id="signup-email"
				value={userValues.email}
				onChange={(e) => setUserValues({...userValues, email: e.target.value})}
			/>
			{errors.email && <p className="signup-error">{errors.email}</p>}
			<label htmlFor="signup-password">Password:</label>
			<input
				type="password"
				id="signup-password"
				value={userValues.password}
				onChange={(e) => setUserValues({...userValues, password: e.target.value})}
			/>
			{errors.password && <p className="signup-error">{errors.password}</p>}
			<button type="submit" id="signup-submit-button">Sign Up</button>
		</form>
		</div>
		</div>
	)
}

const styles = {
	form: {
		display: "flex",
		flexDirection: "column",
		width: "200px",
	},
	container: {
		display: "flex",
		justifyContent: "center",
		marginTop: "20px"
	}

}