
import Paths from "../constants/Paths";


export async function apiGet(url) {
	try {
		return await fetch(Paths.apiBaseUrl + url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		}).then((res) =>
			res.json());
	} catch (error) {
		console.log(error)
	}
}

export async function apiPost(data, url) {
	try {
		return await fetch(Paths.apiBaseUrl + url, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	} catch (error) {
		console.log(error)
	}
}

