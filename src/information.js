import React, {useState} from 'react';
import { Component } from 'react';
import LgIFMSA from './LgIFMSA.png';
import LgThaihealth from './LgThaihealth.png';
import Lg20yrs from './Lg20yrs.png';
import LgeuHabit from './LgeuHabit.png';
import LgFamMed from './LgFamMed.png';
import './information.css';

export default class Information extends Component{

    handleClick = e => {
        
        localStorage.clear();
        e.preventDefault();
        this.props.history.push('/');
        window.location.reload();
      
    }

    render() {
        return(
            <div>       

{/* NavBar */} 
                <nav class="navbar navbar-light c">
                <div class="container-fluid">
                    <a class="navbar-brand mb-0 h1" id="euHabitnavbar" href="#">            
                        <svg width="30" height="30" class="d-inline-block align-text-top Logo">
                            <image href={LgeuHabit} width="30" height="30"/ >
                        </svg>
                        euHabit.
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/mainpage">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/userprofile">Profile</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Prevention and Intervention
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="intervention">Ergonomics setting</a></li>
                                <li><a class="dropdown-item" href="stretching">Stretching</a></li>
                            </ul>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/information">Information</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/" id="signout" type="submit" onClick={this.handleClick}>Sign Out</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            Signed in as: <a href="#login">Mark Otto</a>
                        </span>
                    </div> 
                                           
                </div>
                </nav>

{/* Information */}

                <p id="supported_by">Supported By</p>

                <div class="d-flex flex-column support">
                    <div id="img_center">
                        <svg width="100" height="100">
                            <image href={LgIFMSA} width="100" height="100"/ >
                        </svg>
                    </div>
                    <div id="img_center">
                        <svg width="100" height="100">
                            <image href={LgThaihealth} width="100" height="100"/ >
                        </svg>
                    </div>
                    <div id="img_center1">
                        <svg width="150" height="150">
                            <image href={Lg20yrs} width="150" height="150"/ >
                        </svg>
                    </div>
{/*                
                    <div id="img_center">
                        <svg width="100" height="100">
                            <image href={LgFamMed} width="100" height="100"/ >
                        </svg>
                    </div>
*/}                
{/*                        
                        <img src={LgIFMSA} id="imgprofile1" alt="IFMSA" />
                           
                        <img src={LgThaihealth} id="imgprofile2" alt="Thaihealth" />
                
                        <img src={Lg20yrs} id="imgprofile2" alt="20yrs" />

                        <img src={LgeuHabit} id="imgprofile1" alt="IFMSA" />
*/}
                </div> 

            </div>
        )

    }

}