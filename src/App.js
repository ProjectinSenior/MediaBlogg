import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar'
import Home from './component/Home'
import axios from 'axios';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Add from './component/Add'
function App() {
 //declare a state variable called data, which will be an empty array initially
  const [data,setdata]=useState([])
  //a function fetchData that will make an HTTP GET request to the server and update the data state with the response
  const fetchData=()=>{
    axios.get('http://localhost:3000/api/all')
    .then(response=>{
      setdata(response.data)
      console.log(response)}
      )
    .catch(error=>console.log(error))
  }
  //call the fetchData function when the component mounts
  useEffect(()=>{
    fetchData()
  },[])
  //return the App component, which includes a NavBar and Route components
  return (
    
      <div className='app'>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home data={data} />}/>
        <Route path="/add" element={ <Add/> } />
   </Routes>
    </div>  
  )
}

export default App
