import { db } from "../db.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User Already Exists!");

    // Hash Password and create user
    const salt = bcryptjs.genSaltSync(10); // Use bcryptjs
    const hash = bcryptjs.hashSync(req.body.password, salt);

    //SQL INSERT statement adds the new user's username, email, and hashed password
    const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  //checks if the provided username exists in the database
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    // Check password using bcryptjs
    const isPasswordCorrect = bcryptjs.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");
    //create JWT token is created using the user's ID as the payload
    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      //generated token is sent back to the client in a cookie
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,

        sameSite: "None",
        path: "/",
      })
      .status(200)
      .json(other);
  });
};
export const logout = (req, res) => {
  res
    //Removes the access_token cookie
    .clearCookie("access_token", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    })
    //200 response confirming the user has been logged out
    .status(200)
    .json("User Has Been Logged out");
};
