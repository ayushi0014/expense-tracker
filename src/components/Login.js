import React, { useState }  from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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

            console.log(errorMessage)
        });
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
            <h3>Sign In</h3>
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
            <div className="mb-3">
            <div className="custom-control custom-checkbox">
                <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
                </label>
            </div>
            </div>
            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </div>
            <p className="forgot-password text-right">
            <a href="/signup">Create an account </a>
            </p>
        </form>
        </div>
    )
}

export default Login