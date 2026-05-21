import { useState } from "react";
import TutorCard from "../components/TutorCard";
import { tutors } from "../data/tutors";

function Home() {
  const [search, setSearch] = useState("");

  const filteredTutors = tutors.filter((tutor) =>
    tutor.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        textAlign: "center",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          fontWeight: "600",
        }}
      >
        Find Your Perfect Tutor
      </h1>

      {/* SEARCH BOX */}
      <div style={{ marginBottom: "25px" }}>
        <input
          type="text"
          placeholder="Search by subject (Math, Physics...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "300px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </div>

      {/* TUTOR LIST */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))
        ) : (
          <p style={{ color: "gray" }}>No tutors found</p>
        )}
      </div>
    </div>
  );
}

export default Home;