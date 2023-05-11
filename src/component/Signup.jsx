import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupVald';
import axios from 'axios';
import './Singup.css';

function Signup() {
  const blog = {
    name: "",
    email: "",
    password: ""
  };

  const [values, setValues] = useState(blog);
  const [errors, setErrors] = useState({});
  const navigate =useNavigate();
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.mail === "" && errors.password === ""){
      axios.post("http://localhost:8000/api/postuser",values)
      .then( res => {
        navigate("/")
      })
      .catch(err => console.log(err))
    }
  };

  return (
    <div className= ' d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-Up</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Your Full Name</strong></label>
            <input
              type='text'
              id='name'
              placeholder='Enter your name'
              name='name'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Your Address Mail</strong></label>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Your Password</strong></label>
            <input
              type='password'
              placeholder='Enter your password'
              name='password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Save</button>
          <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Go back</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
