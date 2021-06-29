import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from '../src/Login';
import useToken from '../src/useToken';
import Screening from '../src/Screening';
function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <h1><Link to="/screening">Screening</Link></h1>
        <Switch>
        <Route path="/screening">
          <Screening />
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;