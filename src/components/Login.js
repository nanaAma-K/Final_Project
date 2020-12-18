import React from 'react'
import "../Styles/Login.css"
import {Link} from 'react-router-dom'

function Login() {
    return (
       
        <div className='body'>
            
             <form className='column' >
    <input type='text' placeholder='Username'/> <br/>
    <input type='text' placeholder='Password'/>  <br/>
  <Link to='/Home'>  <button>Login</button></Link>
    <p>Don't have an account? <Link to='/signup'>SignUp</Link></p>
</form>
        </div>
    )
}

export default Login
