import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { AuthContext } from "../context/AuthContext";
import Logo from "../img/Logo.webp";
import Login from "../img/Login.jpg";
import Register from "../img/Register.jpg";
import Write from "../img/Write.webp";
import RegisterImage from "../img/Register-Image.jpg";
export default function NavBar() {
  const { currentUser, logout } = useContext(AuthContext);
  const location = useLocation();

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
      </ul>
      <ul style={{ listStyle: "none" }}>
        <span className="span">{currentUser?.username}</span>
        {currentUser && // Check if currentUser exists
          (location.pathname === "/blog" ||
            location.pathname.startsWith("/post")) && (
            <li>
              <NavLink to="/write">
                <img
                  className="profile-image-style"
                  style={{ width: "30px" }}
                  src={Write}
                  alt=""
                />
              </NavLink>
            </li>
          )}
        {!currentUser && (
          <li>
            <NavLink to="/register">
              <img
                className="profile-image-style"
                style={{ width: "30px" }}
                src={RegisterImage}
                alt=""
              />
            </NavLink>
          </li>
        )}

        {currentUser ? (
          <span onClick={logout}>
            {" "}
            <img
              className="profile-image-style"
              style={{ width: "30px" }}
              src={Register}
              alt=""
            />
          </span>
        ) : (
          <Link className="link" to="/login">
            <img
              className="profile-image-style"
              style={{ width: "30px" }}
              src={Login}
              alt=""
            />
          </Link>
        )}
      </ul>
    </nav>
  );
}
