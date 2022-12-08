import { apiGet, apiPost } from "./ApiRequest";

export async function getUserBasket(username) {
  const basket = await apiGet(`basket/${username}`);
  return basket;
}

export async function basketToOrder(basket) {
  const postedBasket = await apiPost(basket, "basket/toorder");
  return postedBasket;
}

export async function addToBasket(basket) {
  const addedBasket = await apiPost(basket, "basket");
  return addedBasket;
}
