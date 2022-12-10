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

		if (!userValues.userValuesname) {
			formErrors.userValuesname = 'Please enter a userValuesname.';
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
			// name, lastname, userValuesname, email, password
			await signUp(userValues.name, userValues.lastName, userValues.userValuesname, userValues.email, userValues.password)
		}
	};

	return (

		<div id="signupContainer" >
		<h1>Sign up</h1>
		<div style={styles.container}>


		<form onSubmit={handleSubmit} style={styles.form}>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				id="name"
				value={userValues.name}
				onChange={(e) => setUserValues({...userValues, name: e.target.value})}
			/>
			{errors.name && <p className="error">{errors.name}</p>}
			<label htmlFor="lastName">Last name:</label>
			<input
				type="text"
				id="lastName"
				value={userValues.lastName}
				onChange={(e) => setUserValues({...userValues, lastName: e.target.value})}
			/>
			{errors.lastName && <p className="error">{errors.lastName}</p>}
			<label htmlFor="userValuesname">Username:</label>
			<input
				type="text"
				id="userValuesname"
				value={userValues.userValuesname}
				onChange={(e) => setUserValues({...userValues, userValuesname: e.target.value})}
			/>
			{errors.userValuesname && <p className="error">{errors.userValuesname}</p>}
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				id="email"
				value={userValues.email}
				onChange={(e) => setUserValues({...userValues, email: e.target.value})}
			/>
			{errors.email && <p className="error">{errors.email}</p>}
			<label htmlFor="password">Password:</label>
			<input
				type="password"
				id="password"
				value={userValues.password}
				onChange={(e) => setUserValues({...userValues, password: e.target.value})}
			/>
			{errors.password && <p className="error">{errors.password}</p>}
			<button type="submit">Sign Up</button>
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