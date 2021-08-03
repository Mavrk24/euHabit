import React, {useState} from 'react';
import { Component } from 'react';
import './stretching.css';
import rosa11 from './rosa11.png';
import ReactDOM from 'react-dom';
import LgeuHabit from './LgeuHabit.png';

export default class Stretching extends Component {
    render() {
        return(
            <div>
{/* NavbBar */}
                <nav class="navbar navbar-light c">
            <div class="container-fluid">
                <a class="navbar-brand mb-0 h1" id="euHabitnavbar" href="#">            
                    <svg width="30" height="24" class="d-inline-block align-text-top">
                        <image href={LgeuHabit} height="30" width="24"/ >
                    </svg>
                    euHabit
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

{/* Stetching */}

            <p id="profile3">Stretching</p>
{/*
            <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    Link with href
            </a>
*/}
            
            <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample2">Offcanvas</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
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

{/* Stretching Card */}
    <div class="d-flex row mx-0 mb-4 g-4">
        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
            <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
                <img class="card-img-top" src={LgeuHabit} />
            </button>
            {/* */}
                <div class="card-body card_text">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
            <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
                <img class="card-img-top" src={LgeuHabit} />
            </button>
            {/* */}
                <div class="card-body card_text">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
            <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
                <img class="card-img-top" src={LgeuHabit} />
            </button>
            {/* */}
                <div class="card-body card_text">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
            <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
                <img class="card-img-top" src={LgeuHabit} />
            </button>
            {/* */}
                <div class="card-body card_text">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
            <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
                <img class="card-img-top" src={LgeuHabit} />
            </button>
            {/* */}
                <div class="card-body card_text">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
            <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
                <img class="card-img-top" src={LgeuHabit} />
            </button>
            {/* */}
                <div class="card-body card_text">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
            <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
                <img class="card-img-top" src={LgeuHabit} />
            </button>
            {/* */}
                <div class="card-body card_text">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
            <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
                <img class="card-img-top" src={LgeuHabit} />
            </button>
            {/* */}
                <div class="card-body card_text">
                    <h5 class="card-title">Card title</h5>
                </div>
            </div>
        </div>
    </div>
            
{/*Stretching Card*/} 
 {/*           

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card stretch_card">
                        <img src={LgeuHabit} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card stretch_card">
                        <img src={LgeuHabit} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card stretch_card">
                        <img src={LgeuHabit} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card stretch_card">
                        <img src={LgeuHabit} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
            

*/}

            </div>
        )
    }

}