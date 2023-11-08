import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/authentication.css"

const NotAuthorized = () => {

  return (
    <div className='not-auth'>
        <p>You are not Authorized to go Home Please Login First 🔻 🔻</p>
        <button style={{width: "150px"}}>
            <Link to="/signin">SignIn Here</Link>
        </button>
    </div>
  )
}

export default NotAuthorized