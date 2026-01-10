import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartDataMap } from "../services/chartData";

const RANGES = ["1M", "3M"];
const DATASETS = ["price", "volume"];

export default function ChartContainer() {
  const { id } = useParams();
  const chart = chartDataMap[id];

  const [range, setRange] = useState("3M");
  const [dataset, setDataset] = useState("price");
  const [loading, setLoading] = useState(false);

  if (!chart) {
    return (
      <section className="chart-container empty">
        <p>Select a market from the sidebar</p>
      </section>
    );
  }

  const data =
    chart.datasets?.[dataset]?.ranges?.[range] || [];

  const handleChange = (fn) => {
    setLoading(true);
    fn();
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <section className="chart-container">
      {/* Header */}
      <header className="chart-header">
        <div>
          <h2>{chart.title}</h2>
          <p>
            {chart.datasets[dataset].label} · {range}
          </p>
        </div>

        <div className="chart-actions">
          {/* Dataset toggle */}
          <div className="chart-controls">
            {DATASETS.map((d) => (
              <button
                key={d}
                className={`chart-control ${
                  dataset === d ? "active" : ""
                }`}
                onClick={() =>
                  handleChange(() => setDataset(d))
                }
              >
                {d.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Range toggle */}
          <div className="chart-controls">
            {RANGES.map((r) => (
              <button
                key={r}
                className={`chart-control ${
                  range === r ? "active" : ""
                }`}
                onClick={() =>
                  handleChange(() => setRange(r))
                }
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Body */}
      {loading ? (
        <div className="chart-skeleton" />
      ) : (
        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#e5e7eb"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}

/* Tooltip */
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="chart-tooltip">
      <strong>{label}</strong>
      <div>{payload[0].value}</div>
    </div>
  );
}
