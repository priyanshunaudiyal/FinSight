import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { apiFetch } from "../services/api";
import { chartDataMap } from "../services/chartData";

const RANGES = ["1M", "3M"];

export default function ChartContainer() {
  const { id } = useParams();

  const [chart, setChart] = useState(null);
  const [range, setRange] = useState("3M");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(false);

    apiFetch(`/charts/${id}`)
      .then((data) => {
        if (isMounted) {
          setChart(data);
        }
      })
      .catch(() => {
        // Offline fallback
        if (isMounted) {
          setChart(chartDataMap[id] || null);
          setError(true);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!chart) {
    return (
      <section className="chart-container empty">
        <p>Select a market from the sidebar</p>
      </section>
    );
  }

  const data = chart.ranges?.[range] || [];

  return (
    <section className="chart-container">
      {/* Header */}
      <header className="chart-header">
        <div>
          <h2>{chart.title}</h2>
          <p>
            {range} {error && "· Offline mode"}
          </p>
        </div>

        {/* Controls */}
        <div className="chart-controls">
          {RANGES.map((r) => (
            <button
              key={r}
              className={`chart-control ${range === r ? "active" : ""}`}
              onClick={() => setRange(r)}
            >
              {r}
            </button>
          ))}
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
              <Tooltip />
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
