import React, { useState }  from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'




const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
setError("Please enter valid credentials")
            console.log(errorMessage)
        });
    }

    return (
        <div>
            <div style ={{"background": "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6) ), url(https://raw.githubusercontent.com/adrianhajdin/speechly_expense_tracker_project/main/src/assets/money.png)", height: '100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form onSubmit = {handleSubmit} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            
               
            
          
            <div className='bg-white p-5  ' style={{width:'30rem',height:'30rem',borderRadius:'2rem'}}>
                <h3 className='p-2'>Sign In</h3>
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
            <div className="mb-1 px-2 pt-1">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className=" mb-1 px-2 pt-1 pb-2">
            <div className="custom-control custom-checkbox">
                <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                />
                <label className="custom-control-label p-1" htmlFor="customCheck1">
                Remember me
                </label>
            </div>
            </div>
            <div className='text-danger mb-3 px-2'>{error}</div>
            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            <p className="forgot-password px-1"style={{display:'flex',alignItems:'left'}}>
            <a href="/signup">Create an account </a>
            </p>
            </div>
            </div>
                
             
          
        </form>
        </div>
        </div>
    )
}

export default Login