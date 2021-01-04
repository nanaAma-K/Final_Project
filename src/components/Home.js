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
    
    <div class="row">
      <div class="col-4">
        <label style={{color:'blue'}}>set time</label>
        <input type= "time" id="time" name="time"></input>
      </div>
      <div class="col-4">
      < label style={{color:'blue'}}>set date</label><br/>
        <input type = "date" id="date" name="date"></input>
      </div>
    </div>
    

    



         <HabitList/>
        </div>
    )
}

export default Home
