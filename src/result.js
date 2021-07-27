import {React, useState} from 'react';
import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';
import './result.css';
import rosa11 from './rosa11.png';



export default class Result extends Component{
    render() {
    return(
        <div className="welcome"> 
            <h1 id="screening-result">Screening result:</h1>
            <p class="mt-5" id="text-welcome">ระดับความเสี่ยงของคุณ <br/>อยู่ในเกณฑ์ {(() => {
        if (1>2) {
          return (
            <a id="risk">มีความเสี่ยงสูง</a>
          )
        } else {
          return (
            <a  id="no-risk">มีความเสี่ยงต่ำ</a>
          )
        }
          })()}
            </p>

        <p id="go-to-main-page">
          <Button class="btn" id="btn-login" type="submit" href="/mainpage"><b>Next</b></Button>
        </p>


        </div>

        /*<nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1" id="euHabitnavbar"><strong>euHabit.</strong></span>
          </div>
        </nav>*/
        


        




    )
    }
}