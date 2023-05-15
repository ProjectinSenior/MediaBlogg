import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './component/NavBar'
import Home from './component/Home'
import axios from 'axios';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Add from './component/Add'
import Login from './component/Login';
import Signup from './component/Signup';
import Profil from './component/Profil';
import Welcome from './component/Welcome';

function App() {
  
 //declare a state variable called data, which will be an empty array initially
  const [data,setdata]=useState([])
  const [text,setText]=useState('')

  //a function fetchData that will make an HTTP GET request to the server and update the data state with the response
  const fetchData=()=>{
    axios.get('http://localhost:3001/api/all')
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

// function AddBlog(blog){
// console.log("add blog",blog)
// axios.post('http://localhost:3001/api/post',blog)
// .then((response)=>{console.log("my data ",response.data)
// navigate("/home")} )
// .catch((err) => {
//   console.log(err.message);
//   //alert("Could not add blog. Please try again later.");
// });
// }
// update blog 



  return (
    
      <div className='app'>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/home" element={<Home data={data} text={text} setText={setText} />}/>
      <Route path='/Signup' element={<Signup/>}></Route>
        <Route path="/add" element={ <Add /> } />
        <Route path="/profil" element={ <Profil /> } />
   </Routes>
    </div>  
  )
}

export default App
