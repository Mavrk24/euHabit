import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import {validatePassword} from '../src/validate';


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
    
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit} id="myform">
        <label>
        <p>Username</p>

          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
 
        <p>
      {(() => {
        if (username == "root" || (validatePassword(parseInt(username, 16)) === true && password == "test")) {
          return(<div>
            <button type="submit">Access</button>
          </div>);
        }
      })()}
    </p>

      </form>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired

}

