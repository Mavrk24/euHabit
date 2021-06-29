import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../src/Login';
import useToken from '../src/useToken';
import cube from '../src/validate';
import validate from '../src/validate';
function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      {validate()}
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;