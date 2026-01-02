import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { getFavorites } from "../services/favorites";
import "../styles/home.css";

export default function Home() {
  const { user } = useAuth();
  const savedChartsCount = user ? getFavorites(user.id).length : 0;

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <h1>
          {user
            ? `Welcome back, ${user.firstName}`
            : "Financial insights, simplified."}
        </h1>

        <p>
          {user
            ? "Here’s a quick overview to help you explore and analyze market data."
            : "FinSight helps you explore market data, visualize trends, and make informed financial decisions using interactive analytics."}
        </p>

        <div className="home-cta">
          <Link to="/charts" className="btn-primary">
            Explore Charts
          </Link>

          {!user && (
            <Link to="/register" className="btn-secondary">
              Get Started
            </Link>
          )}
        </div>
      </section>

      {/* Logged-in dashboard section */}
      {user && (
        <section className="home-dashboard">
          <div className="dashboard-card">
            <h3>Saved Charts</h3>
            <p>Access your bookmarked market charts.</p>
            <Link to="/charts">View Charts →</Link>
          </div>

          <div className="dashboard-card">
            <h3>Analysis</h3>
            <p>Review insights based on recent data.</p>
            <Link to="/analysis">Go to Analysis →</Link>
          </div>

          <div className="dashboard-card">
            <h3>Profile</h3>
            <p>Manage your account details.</p>
            <Link to="/profile">Edit Profile →</Link>
          </div>
        </section>
      )}

      {/* Public features section */}
      {!user && (
        <section className="home-features">
          <div className="feature-card">
            <h3>Market Trends</h3>
            <p>Track financial trends across multiple metrics.</p>
          </div>

          <div className="feature-card">
            <h3>Interactive Charts</h3>
            <p>Visualize data with filters and dynamic controls.</p>
          </div>

          <div className="feature-card">
            <h3>Smart Analysis</h3>
            <p>Gain insights using structured, data-driven analysis.</p>
          </div>
        </section>
      )}

      {/* Metrics */}
      <section className="home-metrics">
        <div className="metric-card">
          <h4>Markets Tracked</h4>
          <span>12</span>
        </div>

        <div className="metric-card">
          <h4>Charts Viewed</h4>
          <span>48</span>
        </div>

        <div className="metric-card">
          <h4>Insights Generated</h4>
          <span>7</span>
        </div>
      </section>

      <section className="home-metrics">
        <div className="metric-card">
          <h4>Markets Tracked</h4>
          <span>12</span>
        </div>

        <div className="metric-card">
          <h4>Saved Charts</h4>
          <span>{savedChartsCount}</span>
        </div>

        <div className="metric-card">
          <h4>Insights Generated</h4>
          <span>7</span>
        </div>
      </section>
    </div>
  );
}
