import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function Navbar() {
    const { darkMode, toggleTheme } = useTheme();
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#111827",
      color: "white"
    }}>
      <h2 style={{ margin: 0 }}>PeerTutor</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/tutors">Tutors</Link>
        <Link style={linkStyle} to="/bookings">Bookings</Link>
        <Link style={linkStyle} to="/login">Login</Link>
        <Link to="/student-dashboard" style={linkStyle}>
            Student Dashboard
        </Link>

        <Link to="/tutor-dashboard" style={linkStyle}>
            Tutor Dashboard
        </Link>
        <button
  onClick={toggleTheme}
  style={{
    padding: "6px 10px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer"
  }}
>
  {darkMode ? "Light Mode" : "Dark Mode"}
</button>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "15px"
};

export default Navbar;