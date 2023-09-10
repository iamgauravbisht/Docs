const signup_post = async (username, email, password) => {
  return await fetch("http://localhost:3000/signup", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const verifyAuth = async () => {
  return await fetch("http://localhost:3000/verifyAuth", {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const login_post = async (email, password) => {
  return await fetch("http://localhost:3000/login", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const logout = async () => {
  return await fetch("http://localhost:3000/logout", {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const Me = async (id) => {
  return await fetch(`http://localhost:3000/me?id=${id}`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export { signup_post, login_post, Me, verifyAuth, logout };
