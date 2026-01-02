import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../styles/header.css";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          FinSight
        </Link>

        {/* Navigation */}
        <nav className="header__nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>

          <NavLink to="/charts" className="nav-link">
            Charts
          </NavLink>

          {user && (
            <NavLink to="/analysis" className="nav-link">
              Analysis
            </NavLink>
          )}

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </nav>

        {/* Auth Actions */}
        <div className="header__auth">
          {!user ? (
            <>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-link nav-link--outline">
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
              <span className="header__user">{user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
