import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

function HabitList() {

  var habits = ["Exercise","Drink Water","Pray","Eat a fruit","Visit Dentist"];
  const listItems = habits.map((habits) =>
    <option value={habits}>{habits}</option>
  );

  function handleChange(event) {
    this.setState({input: event.target.value});
  }

  function handleAdd() {
    console.log(this.state.input);
  }

    return (
        <div>

 
<br></br>

<div class="row">
  <div class="col-6">
    <label for="Habits" style={{color:'blue'}}>Select Habit</label>

    <select>
      {listItems}
    </select>

    <br></br>
    <div style={{textAlign:'center'}}>
      <input type= "text" placeholder="Add Habit" onChange={handleChange}></input>
      <Button variant="add" onClick={handleAdd}>Add</Button>
    </div>
    
  </div>
</div>



</div>
    )
}

export default HabitList
