import {React, useState} from 'react';
import { Component } from 'react';
import { useHistory } from 'react-router-dom';
import './userprofile.css';
import rosa11 from './rosa11.png';
import LgeuHabit from './LgeuHabit.png';



export default class Profile extends Component{

    handleClick = e => {
        
        localStorage.clear();
        e.preventDefault();
        this.props.history.push('/');
        window.location.reload();
      
    }
    
    render() {
        return(
            <div>   
 {/* Nav */}    
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
                            <a class="nav-link active" href="/userprofile">Profile</a>
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
                            <a class="nav-link" href="/entry">Demographic Data</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/workplace">Workplace form</a>
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
 {/* Profile */}
                
                <h1 id="profile">  Profile </h1> 

                <div class="d-flex flex-column content">
                    <div>
                    <img src={rosa11} id="imgprofile" alt="rosa" />
                    </div>
                    <div class="d-flex flex-column">
                        <div class="d-flex justify-content-center">
                            <p id="heading"> Username: </p>
                            <p>hi</p> {/* ข้อมูลที่จะดึง */}
                        </div>
                        <div class="d-flex justify-content-center">
                            <p id="heading"> E-mail: </p>
                            <p> abs@hotmail.com </p>   {/* ข้อมูลที่จะดึง */} 
                        </div>
                        <div class="d-flex justify-content-center">
                            <p><b> Demographic data </b> </p>   
                        </div>
                        <div class="alignment">
                            <div class="d-flex">
                                <p id="heading"> Age: </p>
                                <p> 16 </p>    {/* ข้อมูลที่จะดึง */}v
                            </div>      
                            <div class="d-flex">
                                <p id="heading"> Biological sex: </p>
                                <p> Male </p>    {/* ข้อมูลที่จะดึง */}
                            </div>  
                            <div class="d-flex">
                                <p id="heading"> Occupation: </p>
                                <p> Student </p>    {/* ข้อมูลที่จะดึง */}
                            </div> 
                            <div class="d-flex">
                                <p id="heading"> Faculty: </p>
                                <p> Medicine </p>    {/* ข้อมูลที่จะดึง */}
                            </div> 
                            <div class="d-flex">
                                <p id="heading"> Study year: </p>
                                <p> 2 </p>    {/* ข้อมูลที่จะดึง */}
                            </div>       
                        </div>
                        <div class="d-flex justify-content-center">
                            <p><b> Screening Results </b> </p>  
                        </div>
                        <div class="alignment">
                            <div class="d-flex">
                                <p id="heading"> Workplace condition: </p>
                                <p> 16 </p>    {/* ข้อมูลที่จะดึง */}
                            </div>      
                            <div class="d-flex">
                                <p id="heading"> Neck Disability Index (NDI): </p>
                                <p> 40 </p> {/* ข้อมูลที่จะดึง */}    
                            </div>       
                        </div>
                        
                    </div>
                </div>
                

            </div>
        )
    }
}