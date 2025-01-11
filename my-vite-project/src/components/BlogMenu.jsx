import { Link } from "react-router-dom";
import "../styles/TextBox.css";
function BlogMenu() {
  return (
    <div className="menu">
      <Link className="link" to="?cat=guitar">
        <h6>Guitar</h6>
      </Link>
      <Link className="link" to="?cat=gear">
        <h6>Gear</h6>
      </Link>
      <Link className="link" to="?cat=questions">
        <h6>Questions</h6>
      </Link>
      <Link className="link" to="?cat=gigs">
        <h6>Gigs</h6>
      </Link>
      <Link className="link" to="?cat=music">
        <h6>Music</h6>
      </Link>
      <Link className="link" to="?cat=history">
        <h6>History</h6>
      </Link>
    </div>
  );
}
export default BlogMenu;
