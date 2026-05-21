import { useEffect, useState } from "react";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f4f6f8",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>My Bookings</h1>

      {bookings.length === 0 ? (
        <p style={{ color: "gray" }}>No bookings yet</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {bookings.map((b, i) => (
            <div
              key={i}
              style={{
                width: "400px",
                background: "white",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                textAlign: "left",
              }}
            >
              <h3>{b.name}</h3>
              <p><b>Subject:</b> {b.subject}</p>
              <p><b>Date:</b> {b.date}</p>
              <p><b>Time:</b> {b.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;