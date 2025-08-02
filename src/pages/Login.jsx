import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

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

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && email && password) {
      alert("Account created successfully");
      setIsSignUp(false);
      setName("");
      setEmail("");
      setUsername("");
      setPassword("");
    } else {
      alert("Fill all fields");
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setName("");
    setEmail("");
    setUsername("");
    setPassword("");
  };
  return (
    <div className="loginPage">
      <div className="box">
        <span className="borderLine"></span>
        <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
          <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

          {isSignUp && (
            <div className="inputBox">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span>Full Name</span>
              <i></i>
            </div>
          )}

          {isSignUp && (
            <div className="inputBox">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Email</span>
              <i></i>
            </div>
          )}

          {!isSignUp && (
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
          )}

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
            {!isSignUp && <a href="#">Forgot Password</a>}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMode();
              }}
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </a>
          </div>

          <button className="neonButton" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
