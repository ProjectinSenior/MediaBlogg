import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Profil() {
  const [userdata, setuser] = useState([])

  useEffect(() => {
    const userId = 1
    axios.get(`http://localhost:8000/api/one/${userId}`)
      .then(response => {
        setuser(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      { userdata.map((el, i) => (
        <div key={i}>
          <div class="card text-center">
   <div class="card-header">
   {el.name} <button>°°°</button>
  </div>
  <div class="card-body">
    <h5 class="card-title">{el.title}</h5>
    <img variant="top" src={el.image} style={{width:"400px", height:"400px",marginLeft:"80px"}} />
    <p class="card-text">{el.description}</p>
    {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
  </div>
  <div class="card-footer text-muted">
   {el.date}
  </div>
  </div>
          </div>
      )).reverse()}
    </div>
  )
}

export default Profil