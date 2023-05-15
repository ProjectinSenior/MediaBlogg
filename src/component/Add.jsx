import React, { useState } from "react";
import axios from "axios";
//import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';

const Add = () => {
  
  const navigate= useNavigate()
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
const handleAdd=()=>{
  const blog={
    title:title,
    image:image,
    description:description,
    date :date,
    users_iduser:19
  };
  
    console.log("add blog",blog)
    axios.post('http://localhost:3001/api/post',blog)
    .then((response)=>{console.log("my data ",response.data)
    navigate("/home")} )
    .catch((err) => {
      console.log(err.message);
      //alert("Could not add blog. Please try again later.");
    });
    
}


  return (
    <>
      {/*<NavBar/>*/}
      <div className="card">
        <div className="card-header">
          <h2 className="card-tittle"><center>Add Post</center></h2>
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
            <textarea
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
              onChange={(e) => setImage(e.target.value)} />
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
          <button className="add-btn" onClick={()=>{handleAdd(); window.location.reload(true)}}>Add</button>
        </div>
      </div>
    </>
  );
};

export default Add;
