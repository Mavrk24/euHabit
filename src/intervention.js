import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './intervention.css';
import rosa11 from './rosa11.png';
import ReactDOM from 'react-dom';
import LgeuHabit from './LgeuHabit.png';

export default class Intervention extends Component{

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
                    <svg width="30" height="24" class="d-inline-block align-text-top">
                        <image href={LgeuHabit} height="30" width="24"/ >
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
                        <li class="nav-item">
                        <a class="nav-link" href="/intervention">Intervention and Prevention</a>
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
{/* Ergonomics setting */}
            <h1 id="profile2"> Ergonomics Setting </h1>  
                <div class="d-flex flex-row">
                    <p id="clickbutton1"> Click on the grey button </p>
                    <a class="btn btn-primary btn_size">
                    </a>
                    <p id="clickbutton2"> to see the information </p> 
                </div>
                <p id="Nxtbutton2">
                        <Button class="btn" id="btn-login" type="submit" href="/stretching"><b>stretching</b></Button>
                </p>

                <svg width="200" height="200" id="photo">
                    <image href={rosa11} height="200" width="200"/ >
                </svg>
{/* ทำปุ่มคลิ๊กบนรูป แล้วใส่ข้อมูลใน offcanva แล้วก็เสร็จ */}
                <div class="container">
                {/*ลองใช้ SVG ดู แทน img*/}
                    <img src={rosa11} alt="Snow" / >
                    <button class="btn">Button</button>
                    <a class="button btn-primary btn_size" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"> 
                    </a>
                </div>

                <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    Link with href
                </a>
{/*                
            <button class="btn btn-primary btn_size" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Button with data-bs-target
            </button>
*/}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body offcanvatext">
                <div>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                    Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        )
    }
}