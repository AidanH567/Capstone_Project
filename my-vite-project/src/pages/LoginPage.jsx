// import { Link, useNavigate } from "react-router-dom";
// import "../styles/LoginPage.css";
// import { useContext, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/authContext";

// function LoginPage() {
//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
//   });

//   const [err, setError] = useState(null);

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const navigate = useNavigate();

//   const { login } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Change this line to match the backend route
//       // await axios.post("/api/auth/login", inputs);
//       await login(inputs);
//       navigate("/");
//     } catch (err) {
//       setError(err.response.data);
//       console.log(err);
//     }
//   };
//   // Save in pages/AboutPage.jsx
//   return (
//     <div className="auth">
//       <h1>Login</h1>
//       <form>
//         <input
//           required
//           type="text"
//           placeholder="username"
//           name="username"
//           onChange={handleChange}
//         />
//         <input
//           required
//           type="password"
//           placeholder="password"
//           name="password"
//           onChange={handleChange}
//         />
//         <button onClick={handleSubmit}>Login</button>
//         {err && <p>{err}</p>}
//         <span>
//           Don't you have an account? <Link to="/register">Register</Link>
//         </span>
//       </form>
//     </div>
//   );
// }
// export default LoginPage;
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LoginPage.css";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
          // onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          // onChange={(e) => setPassword(e.target.value)}
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
