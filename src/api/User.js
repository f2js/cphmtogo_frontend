import { apiPost } from "./ApiRequest";

export async function login(username, password) {
  if (!username || !password) return false;
  try {
    let res = await apiPost({ username, password }, "users/login");
    res = await res.json();
    if (res.message !== "Login successful") return false;
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
  if(res.message !== "'User created'") return false
  return res;
}

export async function logOut() {
  localStorage.removeItem("user")
}
