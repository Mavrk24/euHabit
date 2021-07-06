import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import {validatePassword} from '../src/validate';
import image from './image.png';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return(
    <div className="login d-flex"> 
      <div class="container-fluid">
        <div class="row">
          <div class="col">
          <p class="logo w-100 p-3">MNT Meditech </p>
          </div>
        </div>
        <div class="login-block">
        <div class="row">
            <div class="col">
              <img class="logo-pic" src={image}  />
              <h1 class="title"><strong>euHabit</strong></h1>
            </div>
            <div class="col paragraph-body username d-flex justify-content-center">
            <form onSubmit={handleSubmit} id="myform">
              <ul>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)}/>
              </ul>
              <ul>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
        
              <p class="mt-4">
              <button class="btn btn-login" type="submit">Access</button>
              </p>
              </ul>
            </form>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired

}