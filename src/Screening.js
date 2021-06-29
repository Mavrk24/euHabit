import {React, useState} from 'react';

export default function Screening() {
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [occupation, setOccupation] = useState();
  const [faculty, setFaculty] = useState();
  const [year, setYear] = useState();
  return(
  <div className="login-wrapper"> 
  <form>
    <label>
        <p>Age</p>
          <input type="number" onChange={e =>  setAge(e.target.value)}/>
        </label>
        <p>Gender</p>
        <select onChange={e =>  setGender(e.target.value)}>
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="o">Others</option>
        </select>
        <label>
          <p>Occupation</p>
          <input type="text" onChange={e => setOccupation(e.target.value)}/>
        </label>
        <label>
          <p>Faculty</p>
          <input type="text" onChange={e => setFaculty(e.target.value)}/>
        </label>
        <label>
          <p>Year</p>
          <input type="number" onChange={e => setYear(e.target.value)}/>
        </label>
        <label>
        <p></p>
        <button type="submit">Submit</button>
        </label>
  </form>
  </div>)
}
