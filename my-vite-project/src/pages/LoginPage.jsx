import { Link } from "react-router-dom";
import "../styles/LoginPage.css";

export default function LoginPage() {
  // Save in pages/AboutPage.jsx
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          // onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          // onChange={handleChange}
        />
        {/* <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>} */}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}
