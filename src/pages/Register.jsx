import React, { useState } from 'react'
import {auth, database} from "../config/firebase"
import "../styles/authentication.css"
import { collection, addDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()


    // Create user and save its data in firestore
   const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredintials = await createUserWithEmailAndPassword(auth, mail, password)

            // * To call this function from the cloud we need to have an upgraded plan account for firebase 
            // * createUserDocument(name)
            // * also we will need to have displayName initialized to name like that
            // * const displayName = name;

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
                            <label>Name</label>
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
                            <p>Have an account? <Link to="/signin">SignIn</Link></p>
                        </div>
                    </form>
                </div>
            </div>
    </section>
  )
}

export default Register