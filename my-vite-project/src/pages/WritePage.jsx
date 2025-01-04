import "../styles/WritePage.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function WritePage() {
  const [value, setValue] = useState("");
  // Save in pages/AboutPage.jsx

  return (
    <div className="add">
      <div className="write-content">
        <input type="text" placeholder="title" />
        <div className="write-editor-container">
          <ReactQuill
            className="write-editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
          ;
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
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" className="write-file">
            Upload Image
          </label>
          <div className="write-buttons">
            <button className="write-button-1">Save as a Draft</button>
            <button className="write-button-2">Update</button>
          </div>
        </div>
        <div className="write-item">
          <h1>Catagory</h1>
          <div className="write-cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">ART</label>
          </div>
          <div className="write-cat">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="write-cat">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="write-cat">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="write-cat">
            <input type="radio" name="cat" value="design" id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="write-cat">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}
