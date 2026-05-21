function StudentDashboard() {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Dashboard</h1>

      <h3>My Bookings</h3>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((b, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <p><b>Tutor:</b> {b.name}</p>
            <p><b>Subject:</b> {b.subject}</p>
            <p><b>Date:</b> {b.date}</p>
            <p><b>Time:</b> {b.time}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentDashboard;