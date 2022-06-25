import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { ContactsOutlined } from '@material-ui/icons';


const Signup = () => {
   const [email, setEmail] = useState('')

  
   const [error, setError] = useState('')
   const [disabledParameter, setDisabledParameter] = useState(true)
   const [passwordError, setPasswordError] = useState("")
   const [state, setState] = React.useState({
      firstName: "",
      lastName:"",
      email:"",
      password:"",
    })
   let navigate = useNavigate()


   let namevalidator=(evt)=>
   {
      var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/;
      
      const value = evt.target.value;
let input={     ...state, [evt.target.name]: value}
let passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/



if(input.password.length>0 &&!(input.password.match(passwordRegex)))
{
   setPasswordError("Password must contain at least six characters, at least one number and both lower and uppercase letters and special characters")
}
else{
   setPasswordError("")
}

if(input.firstName==='' || input.lastName==='' ||  input.password==='' ||!(input.email.match(validRegex)) ||input.password.length<6
 )
{

   setDisabledParameter(true)
}

else
{

  setDisabledParameter(false)
}

      setState({
        ...state,
        [evt.target.name]: value
      });

 



   }
   
 

   const handleSubmit = (e) => {
      e.preventDefault()
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
         navigate('/login')
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorMessage)
       
         let bracketIndex=errorMessage.indexOf("(")
         let authBracket=errorMessage.indexOf("/")
         let lastbracketIndex=errorMessage.indexOf(")")
         let authError=errorMessage.substring(authBracket+1,lastbracketIndex)
 
         if(authError=="email-already-in-use")
         {
            setError("Eamil already in use")
         }
         else
         {
         let errorM=errorMessage.substring(9,bracketIndex)
         setError(errorM)
         }
      });
   }

   

    return (
        <div>
               <div style ={{"background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://raw.githubusercontent.com/adrianhajdin/speechly_expense_tracker_project/main/src/assets/money.png)", height: '100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form onSubmit={handleSubmit} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='bg-white p-5   ' style={{width:'30rem',height:'40rem',borderRadius:'2rem'}}>
            <h3 className='p-2'>Sign Up</h3>
            <div className="mb-3 p-2">
               <label>First name<span className='text-danger px-1'>*</span></label>
               <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={state.firstName}
                  name="firstName"
                  required
                  onChange={namevalidator}
               />
            </div>
            <div className="mb-3 p-2">
               <label>Last name<span className='text-danger px-1'>*</span></label>
               <input type="text" className="form-control" placeholder="Last name" required
               name="lastName"
          value={state.lastName}
                  onChange={namevalidator}/>
            </div>
            <div className="mb-3 p-2">
               <label>Email address <span className='text-danger px-1'>*</span></label>
               <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={state.email}
                  required
                  onChange={namevalidator}
               />
            </div>
            <div className=" p-2">
               <label>Password <span className='text-danger px-1'>*</span></label>
               <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={state.password}
                  required
                  onChange={namevalidator}
               />
            </div>
            
            <div className='text-danger mb-3 px-2'>{passwordError}</div>
     

            
            <div className='text-danger mb-3 px-2'>{error}</div>
            <div className="d-grid">
               
               <button type="submit" disabled={disabledParameter}  className="btn btn-primary">
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
