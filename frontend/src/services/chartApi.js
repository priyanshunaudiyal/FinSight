const API_BASE_URL = "http://localhost:5000/api";

export async function fetchChart(id) {
  const res = await fetch(`${API_BASE_URL}/charts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch chart");
  }

  return res.json();
}
