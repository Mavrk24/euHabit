import {React, useState} from 'react';
import { Component } from 'react';
import './entry.css';

export default class Entry extends Component{
    render() {
    return(
      <div> 
      
        <form>
        <h1 class="title"> Demographic Data</h1>
        <div class="mt-5">
          <label>
              <p>Age</p>
                <input type="number"/>
              </label>
              <p>Gender</p>
              <select>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                  <option value="o">Others</option>
              </select>
              <label>
                <p>Occupation</p>
                <input type="text" />
              </label>
              <label>
                <p>Faculty</p>
                <input type="text" />
              </label>
              <label>
                <p>Year</p>
                <input type="number" />
              </label>
              <label>
              <p></p>
              <button type="submit">Submit</button>
              </label>
        </div>
        </form>
        </div>
    
    )
    }
}