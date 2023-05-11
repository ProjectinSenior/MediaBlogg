import React, { useState } from 'react' 
import {Link, useNavigate }from 'react-router-dom'
import Validation from './LoginVald'
import axios from 'axios'
import './Singup.css'
import Image1 from  '../img/image1.jpg'
function Login() {
  const[values,setValues]=useState({
    email:" ",
    password:""
  })
  const [errors,setErrors]=useState({})
  const navigate =useNavigate();
  const handleInput=(event)=>{
    setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
  }
  
  const handleSubmit = () => {
    // event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
  
    if (validationErrors.email === "" && validationErrors.password === "") {
      axios
        .post("http://localhost:8000/api/login", values)
        .then(res => {
          if (res.data === "success") {
            navigate('/home');
          } else {
            alert("No record found.");
          }
        })
        .catch(err => console.log(err));
    }
  };
 

  return (
    <div className='d-flex justify-content-centre align-items-centre bg-primary vh-100' style={{backgroundImage:Image1}}>
      
      <div className='bg-white p-3 rounded w-25'>
      <h2>Sign-In </h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>      
          <label htmlFor='email '> <strong>Your Adress mail </strong></label>
          <input type='email' placeholder='entre your email' name='email'
          onChange={handleInput} className='form-control rounded-0'/>
          {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>      
          <label htmlFor='email '><strong>Your Password</strong> </label>
          <input type='password' placeholder='entre your password' name='password'
          onChange={handleInput}className='form-control rounded-0'/>
          {errors.password && <span className='text-danger'>{errors.password}</span>} 
          </div>
           <Link to ="./home" type ="submit" className='btn btn-success w-100 rounded-0' onClick={()=>{handleSubmit()}}>log in</Link>
           <p>click here if you  dont have a account ?</p>
           <Link to="/Signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Create Account </Link  >
        </form>
      </div>
    </div>
  )
}

export default Login