function Login() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Login Page</h1>
      <input placeholder="Email" style={{ display: "block", margin: "10px 0" }} />
      <input placeholder="Password" type="password" style={{ display: "block", margin: "10px 0" }} />
      <button>Login</button>
    </div>
  );
}

export default Login;