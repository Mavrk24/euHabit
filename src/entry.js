import { Form, Button, Container, Col, Row, Modal, FormControl, InputGroup, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import './entry.css';
import { useHistory } from 'react-router-dom';
import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} from 'react-form-with-constraints'

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
      this.props.history.push('/ndi');
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
                <input name="age" type="number" size="30" placeholder="อายุ"
                 required onChange={this.handleChange}
                 className="form-control mb-3" />
          <FieldFeedbacks for="age">
            <FieldFeedback when="*" class="mb-3"/>
          </FieldFeedbacks>    
          </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>เพศกำเนิด</Form.Label>
                 <Form.Control name="sex" as="select" defaultValue=" " required onChange={this.handleChange}>
                    <option> </option>
                    <option>หญิง</option>
                    <option>ชาย</option>
                  </Form.Control>
                  <FieldFeedbacks for="sex">
            <FieldFeedback when="*" class="mt-3 mb-3"/>
          </FieldFeedbacks> 
              </Form.Group>
          </Row>

          <Form.Label>อาชีพ</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
             <InputGroup.Radio name="student" aria-label="Checkbox for following text input" onChange={this.handleChange}/>
            </InputGroup.Prepend>
              <FormControl name="studenttext"  value="นิสิต นักศึกษา" aria-label="Text input with checkbox"onChange={this.handleChange} />        
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Prepend>
             <InputGroup.Radio name="other" aria-label="Checkbox for following text input" onChange={this.handleChange}/>
            </InputGroup.Prepend>
              <FormControl name="job" minLength={2}  placeholder="อื่นๆ (โปรดระบุ)" aria-label="Text input with checkbox"onChange={this.handleChange} />        
          </InputGroup>
          <FieldFeedbacks for="job">
            <FieldFeedback when="*" class="mb-3" />
          </FieldFeedbacks>   
              
        
          <Form.Label>คณะที่กำลังศึกษา</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
             <InputGroup.Radio name="notfaculty" aria-label="Checkbox for following text input" onChange={this.handleChange}/>
            </InputGroup.Prepend>
              <FormControl name="notfacultytext"  value="ไม่ได้ทำการศึกษาอยู่ในขณะนี้" aria-label="Text input with checkbox"onChange={this.handleChange} />        
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Prepend>
             <InputGroup.Radio name="faculty" aria-label="Checkbox for following text input" onChange={this.handleChange}/>
            </InputGroup.Prepend>
              <FormControl name="facultytext" minLength={2}  placeholder="คณะ (โปรดระบุ)" aria-label="Text input with checkbox"onChange={this.handleChange} />        
          </InputGroup>
          <FieldFeedbacks for="facultytext">
            <FieldFeedback when="*" class="mb-3" />
          </FieldFeedbacks>   
              
          <Form.Label>คณะที่กำลังศึกษา</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
             <InputGroup.Radio name="notyear" aria-label="Checkbox for following text input" onChange={this.handleChange}/>
            </InputGroup.Prepend>
              <FormControl name="notyeartext"  value="ไม่ได้ทำการศึกษาอยู่ในขณะนี้" aria-label="Text input with checkbox"onChange={this.handleChange} />        
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Prepend>
             <InputGroup.Radio name="year" aria-label="Checkbox for following text input" onChange={this.handleChange}/>
            </InputGroup.Prepend>
              <FormControl name="yeartext" minLength={2}  placeholder="ปีการศึกษา (โปรดระบุ)" aria-label="Text input with checkbox"onChange={this.handleChange} />        
          </InputGroup>
          <FieldFeedbacks for="yeartext">
            <FieldFeedback when="*" class="mb-3" />
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