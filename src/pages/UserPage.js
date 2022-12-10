import React from 'react';
import LoginPage from "./LoginPage"
import SignUpPage from "./SignUpPage"
import {logOut} from "../api/User"

export default function UserPage() {

	return (
		<div style={styles.container}>
				<LoginPage/>
				<SignUpPage/>

			<div id="logoutContainer" style={styles.container}>
				<button onClick={logOut}>Logout</button>
			</div>
		</div>
	);
};

const styles = {
	container: {
		marginTop: "25px"
	}
}