import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   let navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         navigate('/login')
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorMessage)
      });
   }

   

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-3">
               <label>First name</label>
               <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
               />
            </div>
            <div className="mb-3">
               <label>Last name</label>
               <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="mb-3">
               <label>Email address</label>
               <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className="mb-3">
               <label>Password</label>
               <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <div className="d-grid">
               <button type="submit" className="btn btn-primary">
                  Sign Up
               </button>
            </div>
            <p className="forgot-password text-right">
               Already registered? <a href="/login">Login</a>
            </p>
            </form>
        </div>
    )
}

export default Signup
