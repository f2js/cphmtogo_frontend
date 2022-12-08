import { apiPost } from "./ApiRequest";

export async function createOrder(order) {
  let res = await apiPost(order, "orders/create");
  res = await res.json();

  const createdOrder = res.order;
  return createdOrder;
}
