import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.jsx";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Ali" && password === "1234") {
      console.log("Login successful!");
      login({
        firstName: "Ali",
        lastName: "Amrolahi",
        token: "XXXX",
      });
      navigate("/home");
    } else {
      setErrorMessage("Username or Password is false");
    }
  };

  return (
    <div className="login-page">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && (
            <div className="alert alert-danger text-danger d-flex align-items-center" role="alert">
              <div>{errorMessage}</div>
            </div>
          )}

          <div className="remmber-forget">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forget Password</a>
          </div>

          <button type="submit">Login</button>

          <div className="regester-link">
            <p>
              Don't have an account?<a href="#">register</a>
            </p>
          </div>
          <div className="regester-link1">
            <a href="/home1">Home</a>
          </div>
        </form>
      </div>
    </div>
  );
};
