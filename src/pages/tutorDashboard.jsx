function TutorDashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Tutor Dashboard</h1>

      <div style={{ marginTop: "20px" }}>
        <div style={card}>
          <h3>Total Students</h3>
          <p>12</p>
        </div>

        <div style={card}>
          <h3>Sessions</h3>
          <p>5 upcoming</p>
        </div>

        <div style={card}>
          <h3>Earnings</h3>
          <p>₹2500 (mock)</p>
        </div>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "20px",
  margin: "10px 0",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};

export default TutorDashboard;