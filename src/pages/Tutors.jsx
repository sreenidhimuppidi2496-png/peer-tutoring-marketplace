import { tutors } from "../data/tutors";

function Tutors() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>All Tutors</h1>

      {tutors.map((t) => (
        <div key={t.id} style={{ margin: "10px 0" }}>
          <h3>{t.name}</h3>
          <p>{t.subject}</p>
        </div>
      ))}
    </div>
  );
}

export default Tutors;