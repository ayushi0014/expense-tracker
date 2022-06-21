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
               <div style ={{"background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://raw.githubusercontent.com/adrianhajdin/speechly_expense_tracker_project/main/src/assets/money.png)", height: '100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form onSubmit={handleSubmit} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='bg-white p-5   ' style={{width:'30rem',height:'40rem',borderRadius:'2rem'}}>
            <h3 className='p-2'>Sign Up</h3>
            <div className="mb-3 p-2">
               <label>First name</label>
               <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
               />
            </div>
            <div className="mb-3 p-2">
               <label>Last name</label>
               <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="mb-3 p-2">
               <label>Email address</label>
               <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className="mb-3 p-2">
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
            </div>
            </form>
        </div>
        </div>
    )
}

export default Signup
