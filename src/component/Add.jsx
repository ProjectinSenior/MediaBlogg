import React, { useState } from "react";
import axios from "axios";

const Add = () => {
  const [title, setTitle] = useState("");
  const [users_iduser, setUsers_iduser] = useState(1);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleclick = (body) => {
    axios.post("http://localhost:3000/post", body);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title"><center>Add Post</center></h2>
      </div>
      <div className="card-body">
        <div>
          <label className="text">Title:</label><br /> 
          <input 
            className="input"
            type="text" 
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="text">Description:</label><br />
          <input
            className="input"
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="text">Image:</label><br />
          <input
            className="input"
            type="text"
            placeholder="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div >
          <label className="text">Date:</label><br />
          <input
            className="inputt"
            type="date"
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div><br />
        <button
          className="add-btn"
          onClick={() =>
            handleclick({
              title,
              users_iduser,
              image,
              description,
              date,
            })
          }
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
