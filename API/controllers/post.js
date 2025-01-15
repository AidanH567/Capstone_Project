import { db } from "../db.js";
import jwt from "jsonwebtoken";

// Fetch all posts or filter by category
export const getPosts = (req, res) => {
  // SQL query to fetch posts. If a category is provided in the query string, filter by it.
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

// Fetch a single post by ID
export const getPost = (req, res) => {
  // SQL query to join the `posts` and `users` tables, fetching post and author details
  const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  // Check if the JWT token is present in the cookies (you need to be logged in)
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  // Verify the token to ensure it's valid
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    // SQL query to insert a new post into the database
    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  // Check if the JWT token is present in the cookies
  const token = req.cookies.access_token;
  console.log("Recive Token", token);

  //If no token, deny access
  if (!token) return res.status(401).json("Not Authenticated");

  // Verify the token to ensure it's valid
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) {
      console.error("Token verification error:", err);
      return res.status(403).json("Token is not valid");
    }

    const postId = req.params.id;
    // SQL query to delete the post if it belongs to the authenticated user
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      console.error("Database Error:", err);
      if (err) {
        return res.status(403).json("You can delete only your post!");
      }

      return res.json("Post has been deleted!");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  });
};
