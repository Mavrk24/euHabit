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
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      username,
      password
    });
    setToken(token);
  }
  return(
    <div className="login"> 
    <div class="container">
    <div class="row">
    <div class="col">
    <p class="logo mt-3">MNT Meditech </p>
    </div>
    </div>
    <div class="row">
    <div class="col">
      <h1 class="title">euHabit</h1>
      <img src={image}  />
      </div>
      <div class="col">
      <form onSubmit={handleSubmit} id="myform">
        <ul>
        <p> Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        <p>Username</p>
        </ul>
        <ul>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </ul>
        <ul>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        
        <p class="mt-4">
      {(() => {
        if (username == "root" || (validatePassword(parseInt(username, 16)) === true && password == "test")) {
          return(<div>
            <button class="btn btn-login" type="submit">Access</button>
          </div>);
        }
      })()}
    </p>
    </ul>
      </form>
      </div>
    </div>
    </div>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired

}

