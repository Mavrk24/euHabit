import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from '../src/Login';
import useToken from '../src/useToken';
import Screening from '../src/Screening';
import Main from '../src/Main';
import Profile from './Profile';
import { useState } from 'react';


function App() {
  let audio = new Audio("/audio.mp3")

  const start = () => {
    audio.play()}
  const [name, setName] = useState();
  const { token, setToken } = useToken();
  var msg = new SpeechSynthesisUtterance('Hello,' + name + 'welcome to euHabit. Your new personal health portfolio')
  msg.voice = window.speechSynthesis.getVoices()[2]
  msg.rate = 0.85; 
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <button onClick ={()=> {
        speechSynthesis.speak(msg)
        }} >AI voice </button>
      <button onClick={()=>start()}>Play</button>
      <h1>Application</h1>
      <input type="text" placeholder= "name" onChange={e => setName(e.target.value)}/>
      <BrowserRouter>
      <h1><Link to="/screening">Screening</Link></h1>
      <h1><Link to="/main">Main</Link></h1>
      <h1><Link to="/user">Profile</Link></h1>
        <Switch>
        <Route path="/screening">
          <Screening />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/user">
          <Profile />
        </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;