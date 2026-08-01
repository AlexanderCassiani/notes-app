function validateUser(name, email, password) {
  return (
    name &&
    email &&
    password &&
    name.length >= 3 &&
    email.includes("@") &&
    password.length >= 6
  );
}

export default validateUser;
