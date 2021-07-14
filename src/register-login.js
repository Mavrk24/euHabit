import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import {validatePassword} from '../src/validate';
import image from './image.png';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Register({setToken}) {
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload();

  }


function matchPassword() {  
  if(password != password2){   
        alert("Passwords did not match");  
    } 
  else {  
        alert("Account created successfully");  
    }
}



  return(
    <div className="login d-flex"> 
      <div class="container-fluid b-0">
        <div class="row">
          <div class="col">
          <p class="logo w-100 mt-4 mx-2">MNT Meditech</p>
          </div>
        </div>
        <div class="login-block">
        <div class="row">
            <div class="col">
              <h1 class="title"><strong>euHabit.</strong></h1>
            </div>
            <div class="col paragraph-body username d-flex">
            <form onSubmit={handleSubmit} id="myform">
            <ul>
              <p>E-mail</p>
              <input type="text" onChange={e => setEmail(e.target.value)}/>
              </ul>
              <ul>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)}/>
              </ul>
              <ul>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
              </ul>
              <ul>
              <p>Confirm Password</p>
              <input type="password" onChange={e => setPassword2(e.target.value)}/>
              </ul>
              <ul>
              <div class="mt-4">
              <button class="btn btn-login" onClick={matchPassword} type="submit"><b> Confirm </b></button>
              </div>
              </ul>
            </form> 
         
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
Register.propTypes = {
  setToken: PropTypes.func.isRequired

}