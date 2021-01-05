import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function HabitList() {

  const [habits, setHabits] = useState(["Exercise","Drink Water","Pray","Eat a fruit","Visit Dentist"]);
  const [reminder, setReminder] = useState([]);
  const [formValues, setFormValues] = useState({
    date:'',time:'',habit:''
  });
  const [name, setName] = React.useState('');
  const listItems = habits.map(habits =>
    <option value={habits}>{habits}</option>
  );

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    setHabits([...habits, name])
  }

  function formChange(event) {
    const value = event.target.value;
    setFormValues({
      ...formValues,
      [event.target.name]: value
    });
  }

  function handleSave() {
    console.log(formValues);
    setReminder([...reminder, formValues])
    console.log(reminder);
  }

    return (
        <div>

 
<br></br>
<div class="row">
      <div class="col-4">
        <label style={{color:'blue'}}>set time</label>
        <input type= "time" id="time" name="time" value={formValues.time} onChange={formChange}></input>
      </div>
      <div class="col-4">
      < label style={{color:'blue'}}>set date</label><br/>
        <input type = "date" id="date" name="date" value={formValues.date} onChange={formChange}></input>
      </div>
    </div>
<div class="row">
  <div class="col-6">
    <label for="Habits" style={{color:'blue'}}>Select Habit</label>

    <select name="habit" value={formValues.habit} onChange={formChange}>
      {listItems}
    </select>

    <br></br>
    <div style={{textAlign:'center'}}>
      <input type= "text" placeholder="Add Habit" value={name} onChange={handleChange}></input>
      <Button variant="add" onClick={handleAdd}>Add</Button>
    </div>
    
    </div>
</div>

<Table striped bordered hover size= "sm">
  <thead>
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Habit</th>
    </tr>
  </thead>
</Table>

<br></br>
 <div style={{textAlign:'center'}}>
   <Button onClick={handleSave}>Save</Button>
 </div>



</div>
    )
}

export default HabitList
