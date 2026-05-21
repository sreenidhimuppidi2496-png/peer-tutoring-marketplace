function Register() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Register Page</h1>
      <input placeholder="Name" style={{ display: "block", margin: "10px 0" }} />
      <input placeholder="Email" style={{ display: "block", margin: "10px 0" }} />
      <input placeholder="Password" type="password" style={{ display: "block", margin: "10px 0" }} />
      <button>Register</button>
    </div>
  );
}

export default Register;