import { chartsData } from "../data/charts.data.js";

export function getChart(req, res) {
  const { id } = req.params;

  const chart = chartsData[id];

  if (!chart) {
    return res.status(404).json({ error: "Chart not found" });
  }

  res.json(chart);
}
