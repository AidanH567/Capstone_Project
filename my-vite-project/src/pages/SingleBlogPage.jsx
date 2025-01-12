import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/menu";
import axios from "axios";
import { useContext } from "react";
import moment from "moment";
import { AuthContext } from "../context/AuthContext";
import "../styles/SingleBlogPage.css";
import { motion } from "motion/react";

const SingleBlogPage = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${postId}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      className="singlepage-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <div className="singlepage-main">
        <div className="singlepage-content">
          <img src={`../upload/${post.img}`} alt={post.title} />
          <div className="singlepage-user">
            {post.userImg && <img src={post.userImg} alt="User Avatar" />}
            <div className="singlepage-info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser?.username === post.username && (
              <div className="singlepage-edit">
                <Link to={`/write?edit=2`}>
                  <img src={Edit} alt="Edit Post" />
                </Link>
                <img onClick={handleDelete} src={Delete} alt="Delete Post" />
              </div>
            )}
          </div>
          <h1 className="singlepage-title">{post.title}</h1>
          <p className="singlepage-description">{post.desc}</p>
        </div>
        <Menu cat={post.cat} />
      </div>
    </motion.div>
  );
};

export default SingleBlogPage;
