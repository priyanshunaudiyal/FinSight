const USERS_KEY = "finsight_users";

function getUsers() {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/* REGISTER */
export async function registerUser({
  firstName,
  lastName,
  email,
  password,
}) {
  await new Promise((res) => setTimeout(res, 500));

  const users = getUsers();

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    password, // plain text for mock only
  };

  users.push(newUser);
  saveUsers(users);

  return { success: true };
}

/* LOGIN */
export async function loginUser({ email, password }) {
  await new Promise((res) => setTimeout(res, 500));

  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
}
