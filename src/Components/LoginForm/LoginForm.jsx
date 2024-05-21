import React, { useState , useEffect } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { redirect ,useNavigate } from "react-router-dom";
import { useAuth } from './../Hooks/useAuth.jsx'


export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // const res = await = axios.post("/login", {
    //   username,
    //   password
    // })
    
    if (username === "Ali" && password === "1234") {
      console.log("Login successful!");
      login({
        firstName: "Ali",
        lastName: "Amrolahi",
        token: "XXXX" 
      });
    } else {
      setErrorMessage("Username or Password is false");
    }
  };

  return (
    <div className="login-page">
     <div className="wrapper ">
       <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <FaLock className='icon' />
        </div>

        <div className="error-message">{errorMessage}</div>

        <div className="remmber-forget">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forget Password</a>
        </div>

        <button type="submit">Login</button>

        <div className="regester-link">
          <p>Don't have an account?<a href="#">register</a></p>
        </div>

      </form>
     </div>
    </div>
  );
};
