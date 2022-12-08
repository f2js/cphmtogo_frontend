import { apiPost } from "./ApiRequest";


export async function login(email, password) {
  if (!email || !password) return false;
  try {
    let res = await apiPost({ email, password }, "users/login");
    res = await res.json();
    if (!res.user) return false;
    const user = res.user;
    localStorage.setItem("user", user)
    return true;
  } catch (err) {
    return false;
  }
}

export async function signUp({ name, lastname, username, email, password }) {
  const data = {
    name: name.trim(),
    lastname: lastname.trim(),
    username: username.trim(),
    email: email.trim(),
    password: password,
  };
  let res = await apiPost(data, "users/signup");
  res = await res.json();
  return res.user.user;
}

export async function logOut() {
  localStorage.removeItem("user")
}
