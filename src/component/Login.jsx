import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Singup.css';
import Image1 from '../img/image1.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handlelogin = async(e)=>{
    try{
      e.preventDefault();
      if(email===""||password===""){
        return alert("fill the rows please")
      }
      const response = await axios.post('http://localhost:3001/api/login',{
      email:email ,
      password:password
    })
    if (response.data ==="you are logged"){
      navigate("/home")
    }else {
      alert (response.data)
    }
  
  }catch (error){
    alert("check your password or email")
  }
};
 


  return (
    <div className= ' form' style={{ display: 'flex', backgroundColor: 'primary', height: '65vh' }}>
      
      <div className='bg-white p-3 rounded w-25'>
      <h2>Sign-In </h2>
        <form action=''>
          <div className='mb-3'>      
          <label htmlFor='email '> <strong>Your Adress mail </strong></label>
          <input type='email' placeholder='entre your email' name='email'
         className='form-control rounded-0' onChange={e=>setEmail(e.target.value)}/>
          
          </div>
          <div className='mb-3'>      
          <label htmlFor='email '><strong>Your Password</strong> </label>
          <input type='password' placeholder='entre your password' name='password'
         className='form-control rounded-0' onChange={e=>setPassword(e.target.value)}/>
          </div>
           <button  type ="submit" className='btn btn-success w-100 rounded-0' onClick={(e)=>{handlelogin(e)}} >login</button>
           <p>click here if you  dont have a account ?</p>
           <Link to="/Signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Create Account </Link  >
        </form>
      </div>
    </div>
  )
}

export default Login