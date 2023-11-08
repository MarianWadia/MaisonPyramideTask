import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import {auth} from "../config/firebase"
import {database} from "../config/firebase"
import "../styles/authentication.css"
import { Link, useNavigate } from 'react-router-dom'

const Authentication = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

   const onSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword (auth, mail, password).then((userCredential) => {
            if(userCredential.user){
                navigate("/home")
            }else{
                console.log("Login failed")
            }
          })
        .catch((error)=>{
            console.log(error);
        })
   }
  return (
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={onSubmit}>

                        <h2>Login</h2>

                        <div className="input-value">
                            <label for="">Email</label>
                            <input type="email" required onChange={(e)=>setMail(e.target.value)} value={mail}/> 
                        </div>

                        <div className="input-value">
                            <label for="">Password</label>
                            <input type="password" required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </div>

                        <button type='submit'>Login</button>

                        <div className="register">
                            <p>Dont Have an account? <Link to="/">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
    </section>
  )
}

export default Authentication