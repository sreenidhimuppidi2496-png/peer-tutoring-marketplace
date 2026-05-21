import { Link } from "react-router-dom";

function TutorCard({ tutor }) {
  return (
    <div style={{
      width: "230px",
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      textAlign: "center"
    }}>
      <h3>{tutor.name}</h3>
      <p style={{ color: "gray" }}>{tutor.subject}</p>
      <p>⭐ {tutor.rating}</p>

      <Link to={`/tutor/${tutor.id}`}>
        <button style={{
          marginTop: "10px",
          padding: "8px 12px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px"
        }}>
          View Profile
        </button>
      </Link>
    </div>
  );
}

export default TutorCard;