import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'
function Welcome() {
  const navigate=useNavigate()
  return (
    <div class="center">
     <button class="btn" onClick={(e)=>(navigate('./login'))}>Get started </button>
  </div>
  )
}

export default Welcome