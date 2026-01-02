const FAVORITES_KEY = "finsight_favorites";

export function getFavorites(userId) {
  const data = localStorage.getItem(FAVORITES_KEY);
  const allFavorites = data ? JSON.parse(data) : {};
  return allFavorites[userId] || [];
}

export function saveFavorite(userId, chart) {
  const data = localStorage.getItem(FAVORITES_KEY);
  const allFavorites = data ? JSON.parse(data) : {};

  const userFavorites = allFavorites[userId] || [];

  if (!userFavorites.find((c) => c.id === chart.id)) {
    userFavorites.push(chart);
  }

  allFavorites[userId] = userFavorites;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(allFavorites));
}

export function removeFavorite(userId, chartId) {
  const data = localStorage.getItem(FAVORITES_KEY);
  const allFavorites = data ? JSON.parse(data) : {};

  allFavorites[userId] = (allFavorites[userId] || []).filter(
    (c) => c.id !== chartId
  );

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(allFavorites));
}
