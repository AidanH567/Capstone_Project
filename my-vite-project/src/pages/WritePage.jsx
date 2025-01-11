import axios from "axios";
import "../styles/WritePage.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";
import moment from "moment";

export default function WritePage() {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  // Save in pages/AboutPage.jsx

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://localhost:8800/api/upload",
        formData,
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(
            `http://localhost:8800/api/posts`,
            {
              title,
              desc: value,
              cat,
              img: file ? imgUrl : "",
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            { withCredentials: true }
          );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="write-content">
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="write-editor-container">
          <ReactQuill
            className="write-editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="write-menu">
        <div className="write-item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visablility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file" className="write-file">
            Upload Image
          </label>
          <div className="write-buttons">
            <button className="write-button-1">Save as a Draft</button>
            <button className="write-button-2" onClick={handleClick}>
              Publish
            </button>
          </div>
        </div>
        <div className="write-item">
          <h1>Catagory</h1>
          <div className="write-cat">
            <input
              type="radio"
              checked={cat === "guitar"}
              name="cat"
              value="guitar"
              id="guitar"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="guitar">Guitar</label>
          </div>
          <div className="write-cat">
            <input
              type="radio"
              checked={cat === "gear"}
              name="cat"
              value="gear"
              id="gear"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="gear">Gear</label>
          </div>
          <div className="write-cat">
            <input
              type="radio"
              checked={cat === "questions"}
              name="cat"
              value="questions"
              id="questions"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="questions">Technology</label>
          </div>
          <div className="write-cat">
            <input
              type="radio"
              checked={cat === "gigs"}
              name="cat"
              value="gigs"
              id="gigs"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="gigs">Gigs</label>
          </div>
          <div className="write-cat">
            <input
              type="radio"
              checked={cat === "music"}
              name="cat"
              value="music"
              id="music"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="music">Music</label>
          </div>
          <div className="write-cat">
            <input
              type="radio"
              checked={cat === "history"}
              name="cat"
              value="history"
              id="history"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="history">Histroy</label>
          </div>
        </div>
      </div>
    </div>
  );
}
