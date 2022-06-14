import React  from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            Login
            <Link to="/signup">
                <button>Signup</button>
            </Link>
        </div>
    )
}

export default Login