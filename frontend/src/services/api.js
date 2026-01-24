const API_BASE = "http://localhost:5000/api";

let onUnauthorized = null;

/**
 * Register a handler to be called on 401 responses
 * (AuthContext will register logout here)
 */
export function setUnauthorizedHandler(fn) {
  onUnauthorized = fn;
}

export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  // 🔐 Session expired / unauthorized
  if (res.status === 401) {
    onUnauthorized?.(); // logout via AuthContext
    throw new Error("Session expired");
  }

  if (!res.ok) {
    let message = "API error";
    try {
      const data = await res.json();
      message = data?.error || message;
    } catch {}
    throw new Error(message);
  }

  return res.json();
}
