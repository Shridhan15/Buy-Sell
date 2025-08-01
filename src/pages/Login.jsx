import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const CorrectName = "BuySell";
  const CorrectPassword = "12345";
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === CorrectName && password === CorrectPassword) {
      navigate("/");
 
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="login-page">
      <div className="box">
        <span className="borderline"></span>
        <form onSubmit={handleLogin}>
          <h2>Sign In</h2>

          <div className="inputBox">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Username</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>

          <div className="links">
            <a href="#">Forgot Password</a>
            <a href="#">Signup</a>
          </div>

          <button className="neon-button" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
