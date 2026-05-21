import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={{ fontFamily: "Arial" }}>

      {/* HERO SECTION */}
      <div
        style={{
          height: "90vh",
          background: "linear-gradient(to right, #2563eb, #1e3a8a)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Learn Faster with Expert Tutors
        </h1>

        <p style={{ fontSize: "18px", maxWidth: "600px" }}>
          Connect with top tutors, book sessions instantly, and improve your skills with personalized learning.
        </p>

        <div style={{ marginTop: "20px" }}>
          <Link to="/register">
            <button
              style={{
                padding: "12px 20px",
                marginRight: "10px",
                border: "none",
                borderRadius: "8px",
                background: "white",
                color: "#1e3a8a",
                fontWeight: "bold"
              }}
            >
              Get Started
            </button>
          </Link>

          <Link to="/tutors">
            <button
              style={{
                padding: "12px 20px",
                border: "2px solid white",
                borderRadius: "8px",
                background: "transparent",
                color: "white"
              }}
            >
              Browse Tutors
            </button>
          </Link>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div
        style={{
          padding: "60px 20px",
          background: "#f4f6f8",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "40px" }}>Why Choose Us?</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          <div style={cardStyle}>
            <h3>Expert Student Tutors</h3>
<p>Learn from high-performing students who excel in their subjects.</p>
          </div>

          <div style={cardStyle}>
            <h3>Easy Booking</h3>
            <p>Book sessions in seconds with instant confirmation.</p>
          </div>

          <div style={cardStyle}>
            <h3>Flexible Timing</h3>
            <p>Choose time slots that fit your schedule.</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <p>© 2026 Peer Tutor Marketplace</p>
      </div>

    </div>
  );
}

const cardStyle = {
  width: "250px",
  padding: "20px",
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
};

export default Landing;