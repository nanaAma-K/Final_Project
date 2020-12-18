import React from 'react'
import "../Styles/Navbar.css"
import {Link} from 'react-router-dom'
//import Logout from './components/Logout'

export default function Navbar({isLogin,handleLogin}) {
 
    return (
        <>
           <nav>
               <ul className='nav-item'>
                   {
                     isLogin?  
                     <div>
                    
                     <li className='nav-list'><Link to='/login' onClick={()=>{handleLogin(false)}}>Logout</Link></li>
                     </div>
                     :
                     <>
                   <li className='nav-list'><Link to='/'>Logout</Link></li>
                  <li className='nav-list'> <Link to='/login'>Login</Link></li>
                  <li className='nav-list'><Link to='/signup'>Signup</Link></li>
                  </>
                   } 
               </ul>
          </nav> 
        </>
    )
}
