import Sidebar from "../components/Sidebar";
import ChartContainer from "../components/ChartContainer";
import "../styles/chart.css";

export default function Charts() {
  return (
    <div className="charts-layout">
      {/* Left navigation */}
      <Sidebar />

      {/* Main chart area */}
      <main className="charts-main">
        <ChartContainer />
      </main>
    </div>
  );
}
