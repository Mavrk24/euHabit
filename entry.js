import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import './entry.css';
import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} from 'react-form-with-constraints';

export default class Entry extends Component{
  handleChange = e => {
    this.form.validateFields(e.target);
  }

  contactSubmit = e => {
    e.preventDefault();
    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
    }
  }
  render() {
    return(
      <div> 
        <h1 class="mx-5" id="demographic-data"> Demographic Data</h1>
     {/*<form>
        <h1 id="demographic-data"> Demographic Data</h1>
        <div class="mt-5">
          <label>
              <p>อายุ</p>
                <input type="number"/>
              </label>
              <p>เพศ</p>
              <select>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                  <option value="o">Others</option>
              </select>
              <label>
                <p>อาขีพ</p>
                <input type="text" />
              </label>
              <label>
                <p>คณะที่กำลังศึกษา (หากเป็นนิสิต/นักศึกษา)</p>
                <input type="text" />
              </label>
              <label>
                <p>ชั้นปีที่กำลังศึกษา</p>
                <input type="number" />
              </label>
              <label>
              <p></p>
              <button type="submit">Submit</button>
              </label>
        </div>  
        </form>
        as="textarea" rows={1}
     */}

<FormWithConstraints
        ref={form => this.form = form}
        onSubmit={this.contactSubmit}
        noValidate className="data-form px-5" onSubmit="this.submit"> 
          <Row className="">
          <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label >อายุ</Form.Label>
                <input name="age" type="number" size="30" placeholder="Age"
                 required onChange={this.handleChange}
                 className="form-control mb-3" />
          <FieldFeedbacks for="age">
            <FieldFeedback when="*" class="mb-3"/>
          </FieldFeedbacks>    
          </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Biological sex</Form.Label>
                 <Form.Control name="sex" as="select" defaultValue=" " required onChange={this.handleChange}>
                    <option> </option>
                    <option>Female</option>
                    <option>Male</option>
                  </Form.Control>
                  <FieldFeedbacks for="sex">
            <FieldFeedback when="*" class="mt-3 mb-3"/>
          </FieldFeedbacks> 
              </Form.Group>
          </Row>
              
              
                <Form.Label>อาชีพ</Form.Label>
                <input name="job" size="30" placeholder="Occupation"
                 required minLength={2} onChange={this.handleChange}
                 className="form-control mb-3" />
          <FieldFeedbacks for="job">
            <FieldFeedback when="*" class="mb-3" />
          </FieldFeedbacks>           

                <Form.Label>คณะที่กำลังศึกษา</Form.Label>
                <input name="faculty" size="30" placeholder="Faculty"
                 required minLength={2} onChange={this.handleChange}
                 className="form-control mb-3" />
          <FieldFeedbacks for="faculty">
            <FieldFeedback when="*" class="mb-3"/>
          </FieldFeedbacks>    

          <Form.Label>ชั้นปี</Form.Label>
                <input name="year" type="number" size="30" placeholder="Study year"
                 required onChange={this.handleChange}
                 className="form-control mb-3" />
          <FieldFeedbacks for="year">
            <FieldFeedback when="*" class="mb-3"/>
          </FieldFeedbacks>    

            
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Text className="text-muted">
                  เราจะไม่เปิดเผยข้อมูลของคุณให้ผู้อื่นที่ไม่เกี่ยวข้องและจะใช้เพื่อการส่งแบบสอบถามการใช้งานเพิ่มเติมเท่านั้น
                </Form.Text>
              </Form.Group>


        

         <p id="Nxtbutton">
          <button class="btn" id="btn-login" type="submit" onClick={this.contactSubmit}><b>Next</b></button>
          </p>
          </ FormWithConstraints>
      </div>
    
    )
  }
}