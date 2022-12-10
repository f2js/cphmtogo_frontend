import { apiPost } from "./ApiRequest";

export async function login(username, password) {
  if (!username || !password) return false;
  try {
    await apiPost({ username, password }, "users/login");
    const user = {username: username,password:password}
    localStorage.setItem("user", JSON.stringify(user))
    return true;
  } catch (err) {
    return false;
  }
}

export async function signUp( name, lastname, username, email, password ) {
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
