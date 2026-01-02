import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-title">Markets</h3>
        <button
          className="sidebar-toggle"
          onClick={() => setCollapsed((v) => !v)}
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/charts/btc" className="sidebar-link">
          Bitcoin
        </NavLink>
        <NavLink to="/charts/eth" className="sidebar-link">
          Ethereum
        </NavLink>
        <NavLink to="/charts/sp500" className="sidebar-link">
          S&P 500
        </NavLink>
      </nav>
    </aside>
  );
}
