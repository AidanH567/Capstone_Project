import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [inputs, setInputs] = useState({
    // State to manage user inputs (username, email, password).
    username: "",
    email: "",
    password: "",
  });

  // Updates input state dynamically based on user input
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handles form submission to register a new user.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sends registration details to the backend.
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  // React Router's navigation hook for redirecting users.
  const navigate = useNavigate();

  // State for handling error messages.
  const [err, setError] = useState(null);

  return (
    <div className="auth">
      <h1>Register</h1>
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
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p style={{ color: "red" }}>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
