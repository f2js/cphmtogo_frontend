import { apiGet } from "./ApiRequest";

export async function getMenu(id) {
	const menu = await apiGet(`menu/${id}`);
	return menu;
}