import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, ListGroup } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import './recommendation.css';
import axios from 'axios';
/*video*/
import stretching_1 from './stretching_1.mp4';
import stretching_2 from './stretching_2.mp4';
import stretching_3 from './stretching_3.mp4'; /*ไม่ใช้แล้ว*/
import stretching_4 from './stretching_4.mp4';
import stretching_5 from './stretching_5.mp4';
import stretching_6 from './stretching_6.mp4';
import stretching_7 from './stretching_7.mp4';
import stretching_8 from './stretching_8.mp4';  /*ไม่ใช้แล้ว*/
import stretching_9 from './stretching_9.mp4';
import stretching_10 from './stretching_10.mp4';

export default class Recommendation extends Component{

    render() {
        return(
            <div>

            <h1 class="mx-5 pb-3" id="demographic-data">
              Result and Recommendation <br/>
              <p class="mt-2" id="survey"> ผลการประเมินสภาพแวดล้อมในการนั่งทำงาน </p>
            </h1>



{/* C2 ท่าเงยหน้าขึ้น/ลง stretching_2*/}   
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" type="video/mp4" src={stretching_2} ></video>
                </div>




            </div>

        )
    }
}
    