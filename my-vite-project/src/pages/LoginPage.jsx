import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LoginPage.css";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  // State to track user inputs for login (username and password).
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  // State for handling error messages.
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  // Accessing the login function from the AuthContext.
  const { login } = useContext(AuthContext);

  // Updates input state dynamically as users type.
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handles login form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Authenticates user via the login function in AuthContext.
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p style={{ color: "red" }}>{err}</p>}
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}
