import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { AuthContext } from "../context/AuthContext";
import Logo from "../img/Logo.webp";
export default function NavBar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="NavBar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <ul className="menu">
        <div className="navbar-links"></div>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/videos">Videos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/listen">Listening To</NavLink>
        </li>
        {/* <li>
          <NavLink to="/courses">Courses</NavLink>
        </li> */}
      </ul>
      <ul>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/write">Write</NavLink>
        </li>

        <span className="span">{currentUser?.username}</span>

        {currentUser ? (
          <span onClick={logout}>Logout</span>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
      </ul>
    </nav>
  );
}
