import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link, Route} from 'react-router-dom'
import Navbar from './Navbar'
//import './home.css'

function Home() {
    return ( 

        <div>
          <Route>
          <Navbar/>
          </Route>
           
            <div class="jumbotron text-center">
  <h1>YOUR HABIT REMINDER</h1>
  <h>Trust me to remind you!</h>

</div>

<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select Habit
  <span class="caret"></span></button>
  
  <ul class="dropdown-menu">
    <li><a href="#Exercise">Exercise</a></li>
    <li><a href="#Drink Water">Drink Water</a></li>
    <li><a href="#Pray">Pray</a></li>
    <li><a href="#Eat a fruit">Eat a fruit</a></li>
    <li><a href="#medical appointments">medical appointments</a></li>
</ul>
</div>  


<br></br>

<label for="Habits">Select Habit:</label>

<select name="Habits" id="Habits" multiple>
  <option value="Exercise">Exercise</option>
  <option value="Drink Water">Drink Water</option>
  <option value="Pray">Pray</option>
  <option value="Eat a fruit">Eat a fruit</option>
  <option value="Visit Dentist">Visit Dentist</option>
</select> 
<br></br>
<Link to='/Addhabit'> <Button variant="add Habit">Add Habit</Button></Link>
        </div>
    )
}

export default Home
