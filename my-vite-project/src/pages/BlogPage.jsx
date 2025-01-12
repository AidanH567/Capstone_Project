import { Link, useLocation } from "react-router-dom";
import "../styles/BlogPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogMenu from "../components/blogMenu";
import { motion } from "motion/react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <motion.div
      className="blog-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <BlogMenu />
      <div className="blog-posts">
        {posts.map((post) => (
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
              <p>{post.desc}</p>
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
