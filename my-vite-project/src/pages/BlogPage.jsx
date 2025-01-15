import { Link, useLocation } from "react-router-dom";
import "../styles/BlogPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogMenu from "../components/blogMenu";
import { motion } from "motion/react"; // Importing motion for animations
import DOMPurify from "dompurify";

export default function BlogPage() {
  const [posts, setPosts] = useState([]); // State for holding posts

  const cat = useLocation().search; // Get query parameters from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching posts data from the backend with possible query parameters
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        setPosts(res.data); // Setting the fetched posts in state
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]); // Dependency array ensures the effect runs when the query string changes

  return (
    <motion.div
      className="blog-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.5 }, ease: "easeInOut" }} //
    >
      <BlogMenu />
      <div className="blog-posts">
        {[...posts].reverse().map((post) => (
          <div className="blog-post" key={post.id}>
            <div className="blog-img">
              <img src={`../upload/${post.img}`} alt={post.title} />
            </div>
            <div className="blog-content">
              <Link
                className="link"
                style={{ textDecoration: "none" }}
                to={`/post/${post.id}`}
              >
                <h1>{post.title}</h1>
              </Link>

              <p
                className="singlepage-description"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.desc), // Sanitize HTML content before rendering
                }}
              ></p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
