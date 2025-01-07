import { Link } from "react-router-dom";
import "../styles/TextBox.css";
function BlogMenu() {
  return (
    <div className="menu">
      <Link className="link" to="?cat=art">
        <h6>ART</h6>
      </Link>
      <Link className="link" to="?cat=science">
        <h6>SCIENCE</h6>
      </Link>
      <Link className="link" to="?cat=technology">
        <h6>TECHNOLOGY</h6>
      </Link>
      <Link className="link" to="?cat=cinema">
        <h6>CINEMA</h6>
      </Link>
      <Link className="link" to="/?cat=design">
        <h6>DESIGN</h6>
      </Link>
      <Link className="link" to="?cat=food">
        <h6>FOOD</h6>
      </Link>
    </div>
  );
}
export default BlogMenu;
