import React, { useState, useEffect } from 'react'
import Edit from './Edit'
import axios from 'axios'
import './Singup.css'
function Profil({updateBlog}) {
  const [data, setData] = useState([])
  const [show,setShow]=useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const userId = 19


  useEffect(() => {
    axios.get(`http://localhost:3001/api/one/${userId}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.log(error))
  }, [userId ])

//delete blog
const handleDelete=(idpost)=>{
  if(window.confirm("are you sure that u want to delete it")){
    axios.delete(`http://localhost:3001/api/${idpost}`)
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{console.log(err)})
  }
}
const handleShow = () => {
  setShow(!show);
  
};

function updateBlog(idpost,blog){
  axios.put(`http://localhost:3001/api/blog/${idpost}`,blog)
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{console.log(err)})
}

return (
  <>
    {data.map((el, i) => (
      <div key={i}>
        <div className="card text-center">
          <div className="card-header">
            <p>{el.name}</p>
            <div className="btnk">
              <button onClick={handleShow}>°°°</button>
              {show && (
                <>
                  <button
                    className="btn3"
                    onClick={() => setShowEdit(!showEdit)}
                  >
                    EDIT
                  </button>
                  <button
                    className="btn2"
                    onClick={() => {
                      handleDelete(el.idpost);
                      window.location.reload(true);
                    }}
                  >
                    DELETE
                  </button>
                </>
              )}
            </div>
            <Edit el={el} showEdit={showEdit} updateBlog={updateBlog} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{el.title}</h5>
            <img
              variant="top"
              src={el.image}
              style={{
                width: "400px",
                height: "400px",
                marginLeft: "80px",
              }}
            />
            <p className="card-text">{el.description}</p>
            {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
          </div>
          <div className="card-footer text-muted">{el.date}</div>
        </div>
      </div>
    )).reverse()}
  </>
);
}

export default Profil