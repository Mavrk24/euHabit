import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import {validatePassword} from '../src/validate';
import image from './image.png';
import {useHistory} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';




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
  export default function Login({setToken,history}) {
  const [email, setEmail] = useState();
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
  
  const handleClick = (e) => { 
    e.preventDefault();
    setToken({"token":"register"});
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
                <div class="mt-4">
                <button class="btn btn-login" type="submit"><b>Access</b></button>
                </div>
                </ul>
                <ul>
                <a style={{color: "#dff9f2"}} href="/register" onClick={handleClick}> 
                  New to euHabit? Register now. </a>
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


