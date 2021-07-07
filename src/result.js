import {React, useState} from 'react';
import { Component } from 'react';
import './App.css';

export default class Result extends Component{
    render() {
    return(
        <div className="welcome"> 
            <h1>Screening result:</h1>
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
        </div>
        
    
    )
    }
}