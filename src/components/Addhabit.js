import React from 'react'
import {Link} from 'react-router-dom'
function Addhabit() {
    return (
        <div>
            <label>Add Preferred Habit here:</label><br/>
            <input type = "date" id="date" name="date"></input>

           
            <Link to='/Home'><button style={{color:'blue' , backgroundColor:'grey'}}>Save</button></Link>
    
        </div>
    )
}

export default Addhabit
