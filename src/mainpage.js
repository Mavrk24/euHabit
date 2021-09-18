import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './mainpage.css';
import rosa11 from './rosa11.png';
import ReactDOM from 'react-dom';
import LgeuHabit from './LgeuHabit.png';
import Navbar from './navbar.js';
import { withRouter } from 'react-router-dom';
import circularlogo from './circlelogo_euHabit.png';
import ergo_icon from './ergonomics.icon.png';
import stretch_icon from './stretching.icon.png';
import stretching_1 from './stretching_1.mp4';


export default class Mainpage extends Component{



        handleClick = e => {
        
        localStorage.clear();
        e.preventDefault();
        this.props.history.push('/navbar');
        window.location.reload();
      
    }

    getErgo = () => {
        this.props.history.push('/intervention');
}

getStretching = () => {
        this.props.history.push('/stretching');
}

    render() {
        return(
            <div>
                <Navbar />
{/* Office syndrome definition */}

                <h1 id="topic"> euHabit. <img id="logo-pic" src={circularlogo} alt="euHabit logo" / >  </h1>
                                

                <div class="heading">
                    <p> What is <b> office syndrome </b> (musculoskeletal disorders)? </p>
                </div>
                    
                <div class="paragraph-text">
                    <p>  
                    "Musculoskeletal disorders (MSD) are injuries or disorders of the muscles, nerves, tendons, joints, cartilage, and spinal discs.
                    Work-related musculoskeletal disorders (WMSD) are conditions in which: <br/>
                    - The work environment and performance of work contribute significantly to the condition; and/or <br/>
                    - The condition is made worse or persists longer due to work conditions"
                    </p>
                    <p id="cdc">  
                    - Centers for Disease Control and Prevention, CDC
                    </p>
                </div>

                <div class="heading">
                    <p> <b> want to prevent? </b> </p>
                    <p id="clickme"> Click below! </p>
                </div>

{/* prevention card */}

                <div class="d-flex flex-row justify-content-center mb-5">
                    <div>
                        <div class="card mainpage_card h-100">
                        {/* เอาภาพใน card */}
                            <button class="btn mainpage_button" type="submit" href="/intervention">
                                <a href="/intervention">
                                    <img class="card-img-top" src={ergo_icon} />
                                </a>
                            </button>
                        {/* */}
                            <div class="card-body card_text_mainpage">
                                <p class="card-title textlink" onClick={this.getErgo}><b> Ergonomics setting </b></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="card mainpage_card h-100">
                        {/* เอาภาพใน card */}
                            <button class="btn mainpage_button" type="submit">
                                <a href="/stretching">
                                    <img class="card-img-top" src={stretch_icon} />
                                </a>
                            </button>
                        {/* */}
                            <div class="card-body card_text_mainpage">
                                <p class="card-title textlink"><b> Stretching </b></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="embed-responsive embed-responsive-16by9" id="video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={1} type="video/mp4" src={stretching_1} ></video>
                  </div>)

            </div>
        )
    }
}