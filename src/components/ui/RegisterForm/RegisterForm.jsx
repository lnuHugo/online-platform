import React, { useState } from "react";
import "./RegisterForm.css";
import { register } from "../../../services/apiService";

function RegisterForm({ setErrorMessage, setSuccessMessage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    if (password !== confirm) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const response = await register(data);

    if (response.status === "success") {
      setErrorMessage("");
      setSuccessMessage(response.message);
    } else {
      setErrorMessage(response.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
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
      <div>
        <input
          placeholder="Confirm"
          type="password"
          value={confirm}
          onChange={(event) => setConfirm(event.target.value)}
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
}

export default RegisterForm;
