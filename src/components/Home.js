import React from 'react'
//import Button from 'react-bootstrap/Button';
import  {Route} from 'react-router-dom'
import Navbar from './Navbar'
import HabitList from './HabitList'
//import './home.css'

//const [timer,setTimer]=useState('')


function Home() {


    return ( 

        <div>
              <Route>
                   <Navbar/>
              </Route>

             

<div class="jumbotron text-center">
  <h1 style={{color:'blue'}}>YOUR HABIT REMINDER</h1>
  <h>Trust me to remind you!</h>
</div>
    
    
    

    



         <HabitList/>
        </div>
    )
}

export default Home
