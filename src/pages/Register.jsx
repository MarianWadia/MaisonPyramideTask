import React, { useState } from 'react'
import {auth, database} from "../config/firebase"
import "./Authentication.css"
import { collection, addDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()


   const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredintials = await createUserWithEmailAndPassword(auth, mail, password)
            const user = await userCredintials.user
            const docRef = await addDoc(collection(database, "users"), {
                name, 
                email: user.email,
                createdAt: user.metadata.creationTime
            });
            console.log("Document written with ID: ", docRef.id);
            navigate("/signin")
          } catch (e) {
            console.error("Error adding document: ", e);
          }
   }
  return (
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={onSubmit}>

                        <h2>Register</h2>

                        <div className="input-value">
                            <label style={{color: "white"}}>Name</label>
                            <input type="text" required onChange={(e)=>setName(e.target.value)} value={name} /> 
                        </div>

                        <div className="input-value">
                            <label>Email</label>
                            <input type="email" required onChange={(e)=>setMail(e.target.value)} value={mail}/> 
                        </div>

                        <div className="input-value">
                            <label>Password</label>
                            <input type="password" required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </div>

                        <button type='submit'>Register</button>

                        <div className="register">
                            <p>Have an account? <Link to="/SignIn">SignIn</Link></p>
                        </div>
                    </form>
                </div>
            </div>
    </section>
  )
}

export default Register