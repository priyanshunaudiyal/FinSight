import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo / Brand */}
        <div className="header__logo">
          Fin<span>Sight</span>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/charts" className="nav-link">
            Charts
          </NavLink>
          <NavLink to="/analysis" className="nav-link">
            Analysis
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
