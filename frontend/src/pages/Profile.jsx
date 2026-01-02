import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import "../styles/auth.css";

export default function Profile() {
  const { user, login } = useAuth();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSave = () => {
    setLoading(true);

    const updatedUser = {
      ...user,
      firstName,
      lastName,
    };

    // reuse login() to update auth state cleanly
    login(updatedUser);

    setTimeout(() => {
      setLoading(false);
      setSuccess("Profile updated successfully");
    }, 400);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Profile</h1>

        <div className="auth-form">
          <input
            className="auth-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />

          <input
            className="auth-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />

          <input className="auth-input" value={user.email} disabled />

          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
              marginTop: "-0.5rem",
            }}
          >
            Email cannot be changed.
          </p>

          {success && (
            <div
              style={{
                fontSize: "0.8rem",
                color: "#4ade80",
                textAlign: "center",
              }}
            >
              {success}
            </div>
          )}

          <button
            className="auth-button"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
