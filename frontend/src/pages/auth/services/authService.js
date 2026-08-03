const API = "http://localhost:8080/api";

export async function signup(name, email, password) {
  try {
    const response = await fetch(`${API}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.error("Ha ocurrido un error al registrarse: ", err);
    throw err;
  }
}

export async function login(email, password) {
  try {
    const response = await fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
}
