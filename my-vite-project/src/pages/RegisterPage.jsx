import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  const navigate = useNavigate();
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

          // onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          // onChange={(e) => setPassword(e.target.value)}
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

// const [username, setUsername] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [inputs, setInputs] = useState({});

// const handleChange = (e) => {
//   console.log(inputs);
//   setInputs({
//     username: username,
//     email: email,
//     password: password,
//   });
// };

// console.log(inputs);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     // Change this line to match the backend route
//     await axios
//       .post("http://localhost:8800/api/auth/register", {
//         username: username,
//         email: email,
//         password: password,
//       })
//       .then((response) => console.log(response.data.data));

//     navigate("/login");
//   } catch (err) {
//     setError(err);
//     console.log(err);
//   }
// };
