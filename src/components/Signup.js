import React from 'react'
import "../Styles/Signup.css"
import {Link} from 'react-router-dom'
//import '../styles/Signup.css'
function Signup() {
    return (
        <div className='main'>
            <div>
            <form className='form-container'>
                <input type='text' placeholder='Username'/> <br/>
                <input type='text' placeholder='Email'/> <br/>
                <input type='text' placeholder='Password'/>  <br/>

                <Link to='/Login'>  <button>Signup</button></Link>
                <p>Already have an account? <Link to='/'>Login</Link></p>
            </form>
        </div>
        </div>
    )
}

export default Signup

