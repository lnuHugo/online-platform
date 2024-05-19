import React, { useState } from "react";
import "./SignInForm.css";
import { Link } from "react-router-dom";
import { logIn } from "../../../services/apiService";

function LoginForm({ onLogin, setErrorMessage, setSuccessMessage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      "username": username,
      "password": password
    }
    const response = await logIn(data)

    if (response.status === "success") {
      localStorage.setItem('jwtToken', response.token)
      setErrorMessage("");
      setSuccessMessage(response.message);
    } else {
      setErrorMessage(response.message);
    }

    onLogin()
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div>
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <Link to="/register" className="register">
        Create an account
      </Link>
    </>
  );
}

export default LoginForm;
