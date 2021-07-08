import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import './entry.css';

export default class Entry extends Component{
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

        <Form className="data-form px-5"> 
          <Row className="mb-3">
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>อายุ</Form.Label>
                <Form.Control type="number" placeholder="Age" />
              </Form.Group>
            
              <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Biological sex</Form.Label>
                  <Form.Control as="select" defaultValue="- Select -">
                    <option> - Select - </option>
                    <option>Female</option>
                    <option>Male</option>
                  </Form.Control>
              </Form.Group>
          </Row>
              
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>อาชีพ</Form.Label>
                <Form.Control type="text" placeholder="Occupation" />
              </Form.Group>                 

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>คณะที่กำลังศึกษา</Form.Label>
                <Form.Control type="text" placeholder="Faculty" />
              </Form.Group>              
              
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>ชั้นปี</Form.Label>
                <Form.Control type="number" placeholder="Study Year" />
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Text className="text-muted">
                  เราจะไม่เปิดเผยข้อมูลของคุณให้ผู้อื่นที่ไม่เกี่ยวข้องและจะใช้เพื่อการส่งแบบสอบถามการใช้งานเพิ่มเติมเท่านั้น
                </Form.Text>
              </Form.Group>


        </Form>
      </div>
    
    )
  }
}