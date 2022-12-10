import React, {useEffect, useState} from 'react';
import {login} from "../api/User"

export default function LoginPage() {
	const [user, setUser] = useState({});
	const [userLoggedIn, setUserLoggedIn] = useState(false)
	const userFromStorage = JSON.parse(localStorage.getItem("user"))

	const performLogin = async () => {
		try {
			await login(user.username, user.password);
			localStorage.getItem("user") && setUserLoggedIn(true)
		} catch (e) {

		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		await performLogin()

	};

	return (
		<div id="loginContainer">

		<h1>Login</h1>
		<div style={styles.container}>

			<form onSubmit={handleSubmit} style={styles.form}>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					value={user.username}
					onChange={(e) => setUser({...user, username: e.target.value})}
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					value={user.password}
					onChange={(e) => setUser({...user, password: e.target.value})}
				/>
				<button type="submit" id="login-submit-button">Login</button>
			</form>
			{userLoggedIn && userFromStorage !== undefined &&
			<div>
				<p id="logged-in-message">Logged in as: {userFromStorage.username}</p>
			</div>
			}

		</div>
		</div>
	);
};

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