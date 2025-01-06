import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { AuthContext } from "../context/authContext";
export default function NavBar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="NavBar">
      <ul className="menu">
        <Link className="link" to="blog/?cat=art">
          <h6>ART</h6>
        </Link>
        <Link className="link" to="blog/?cat=science">
          <h6>SCIENCE</h6>
        </Link>
        <Link className="link" to="blog/?cat=technology">
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link className="link" to="blog/?cat=cinema">
          <h6>CINEMA</h6>
        </Link>
        <Link className="link" to="blog/?cat=design">
          <h6>DESIGN</h6>
        </Link>
        <Link className="link" to="blog/?cat=food">
          <h6>FOOD</h6>
        </Link>

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
          <NavLink to="/gigs">Gigs</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/questions">Questions</NavLink>
        </li>
        <li>
          <NavLink to="/listen">Listening To</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/merch">Merch</NavLink>
        </li>
        {/* <li>
          {currentUser ? (
            <NavLink to="/profile">{currentUser.username}</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li> */}
        <li></li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/write">Write</NavLink>
        </li>
        <li>
          <NavLink to="/singleblog">Single Blog</NavLink>
        </li>
        <span className="span">{currentUser?.username}</span>

        {currentUser ? (
          <span onClick={logout}>Logout</span>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
      </ul>{" "}
    </nav>
  );
}
