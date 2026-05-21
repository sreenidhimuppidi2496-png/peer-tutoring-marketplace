import { useParams } from "react-router-dom";
import { useState } from "react";
import { tutors } from "../data/tutors";
import { getBookings, saveBookings } from "../utils/storage";

function TutorProfile() {
  const { id } = useParams();

  const tutor = tutors.find((t) => t.id === id);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  if (!tutor) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Tutor not found</h2>
      </div>
    );
  }

  // ✅ ONLY ONE booking function (FIXED)
  const handleBooking = () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    const oldBookings = getBookings();

    oldBookings.push({
      id: Date.now(),
      tutorId: tutor.id,
      name: tutor.name,
      subject: tutor.subject,
      date,
      time,
    });

    saveBookings(oldBookings);

    alert("Booking Confirmed!");

    setDate("");
    setTime("");
  };

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f4f6f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* TUTOR INFO */}
        <h1 style={{ marginBottom: "10px" }}>{tutor.name}</h1>

        <p>
          <b>Subject:</b> {tutor.subject}
        </p>

        <p>
          <b>Rating:</b> ⭐ {tutor.rating}
        </p>

        <p style={{ color: "gray" }}>{tutor.bio}</p>

        <hr style={{ margin: "20px 0" }} />

        {/* BOOKING SECTION */}
        <h3>Book a Session</h3>

        <div style={{ marginTop: "10px" }}>
          <label>Date:</label>
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              padding: "10px",
              marginTop: "5px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Time:</label>
          <br />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{
              padding: "10px",
              marginTop: "5px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleBooking}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Book Session
        </button>
      </div>
    </div>
  );
}

export default TutorProfile;