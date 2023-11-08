import React from 'react'
import "../styles/authentication.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-auth'>
        <p>This Page is Not Found ⛔⛔ </p>
        <button style={{width: "150px"}}>
            <Link to="/home">Go Home</Link>
        </button>
    </div>
  )
}

export default NotFound