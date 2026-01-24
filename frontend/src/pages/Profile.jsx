import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Profile() {
  const { user, loading: authLoading, setUser } = useAuth();

  console.log("Profile render", { authLoading, user });
  
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");

  // Populate form whenever user becomes available OR changes
  useEffect(() => {
    if (!user) return;

    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
  }, [user?.id]);

  // Optional backend sync (safe)
  useEffect(() => {
    if (authLoading || !user) return;

    apiFetch("/profile/me")
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      })
      .catch(() => {});
  }, [authLoading, user?.id, setUser]);

  if (authLoading || !user) {
    return <div className="auth-container">Loading...</div>;
  }

  const handleSave = async () => {
    setSaving(true);
    setSuccess("");

    try {
      const data = await apiFetch("/profile/me", {
        method: "PUT",
        body: JSON.stringify({ firstName, lastName }),
      });

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setSuccess("Profile updated successfully");
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
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
          />

          <input
            className="auth-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input className="auth-input" value={user.email} disabled />

          <p className="auth-hint">Email cannot be changed.</p>

          {success && <p className="auth-success">{success}</p>}

          <button
            className="auth-button"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

          <button
            className="auth-button"
            type="button"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
