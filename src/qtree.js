import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, ListGroup } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './qtree.css';
import axios from 'axios';

export default class Display extends Component{

  constructor(props) {
    super(props);
    this.state = {
      msg:'',
      iter: 1,
      arr: []
    }
  };
        
  postrequest = () =>{
    let payload = {
      payload: this.state.arr
    };
    
    axios({
      url: '/subentry',
      method: 'post',
      data: payload
    });
  }

  componentDidMount = () =>{
    this.request();
  }
       
  resolve = () =>{
    axios.get("/intervention")
    .then(response => {
      console.log(response.data);
    });
  };
  
  request = () =>{
    axios.get("/display")
    .then(response => {
      console.log(22);
      const text = response.data.text;
      this.setState({ msg: '123'});
      this.setState(previousState => ({
        iter: parseInt(previousState.iter) +1 
      }));
    });
  };
      
  onYes = () =>{
    var array = this.state.arr
    if (array.length < 26){
      this.setState({
        arr: this.state.arr.concat(1)
      });
      this.request();
      console.log(this.state.arr);
    }
  }
      
  onNo = () =>{
    var array = this.state.arr
    if (array.length <26){
      this.setState({
        arr: this.state.arr.concat(0)
      });
      this.request();
      console.log(this.state.arr);
    }
  }

  render() {
        return(
        <div onLoad={this.request.bind(this)}>   
            <h1 class="mx-5 pb-3" id="demographic-data">
              Workplace condition <br/>
              <p class="mt-2" id="survey"> แบบประเมินสภาพแวดล้อมในการนั่งทำงาน </p>
            </h1>

            <p class="mx-5 p-3" id="instruction1"> 
              แบบสอบถามนี้ทำขึ้นเพื่อวิเคราะห์และท่าทางการนั่งทำงาน/เรียนกับคอมพิวเตอร์หรืออุปกรณ์อิเล็กทรอนิกส์โดยประเมินจาก <br/>
              กรุณาเลือกคำตอบ <b>"ที่ตรงกับคุณมากที่สุด"</b>
            </p>

{/*Questionnaire*/}   

            <div class="mt-5 row d-flex question_title">
              <p class="col question_1" id="q"> Question: </p>
              <div class="col question_2">
                {this.state.msg}
              </div>
               
            </div>

            <div class="mt-5 row d-flex justify-content-center" >
              <div class="col left_side">
                <Button id="yesbutton" onClick={this.onYes.bind(this)}> Yes </Button>
              </div>
              <div class="col right_side">
                <Button id="nobutton" onClick={this.onNo.bind(this)}> No </Button>
              </div>
            
            </div>

            <p class="mt-5" id="Nxtbutton2">
              <Button id="btn-finish" onClick={this.postrequest.bind(this)}> Finish </Button>
            </p>
            
          {/*
            <p class="mt-3" id="Nxtbutton2">
            <Button id="btn-intervention" onClick={this.resolve.bind(this)}> Intervention </Button>
            </p>
          */}

        </div>
       )
    }
}