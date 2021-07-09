import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import './ndi-rosa.css';

export default class NDI extends Component{
    render() {
        return(
            <div> 
                <h1 class="mx-5 pb-3" id="demographic-data"> 
                    rapid office strain assessment (ROSA) <br/> 
                    แบบประเมินความเสี่ยงทางการยศาสตร์ด้วยวิธีโรซ่า 
                </h1>
                <p class="mx-5 p-3" id="instruction"> 
                    แบบสอบถามนี้ทำขึ้นเพื่อวิเคราะห์สถานีงานและท่าทางการนั่งทำงานกับคอมพิวเตอร์โดยประเมินจาก
                    1. ระดับของจอคอมพิวเตอร์และลักษณะการใช้โทรศัพท์สำนักงาน 
                    2. การใช้เมาส์และแป้นพิมพ์
                    กรุณาทำเครื่องหมายลงในช่องเพียงหนึ่งช่อง
                </p>

{/*คำถาม ROSA*/}

                <Form className="px-5" id="screening-form"></Form>
                    <h1> การวิเคราะห์จอมอนิเตอร์และโทรศัพท์ </h1>
                    <Form.Group className="mb-3 px-4">
                        <Form.Label> 1. ความเจ็บปวด </Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ยังไม่มีความเจ็บปวดในขณะนี้"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ปวดน้อยมากในขณะนี้"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ปวดปานกลางในขณะนี้"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ปวดค่อนข้างรุนแรงในขณะนี้"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ปวดรุนแรงมากในขณะนี้"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ปวดร้ายแรงที่สุดเท่าที่จะจินตนาการได้ในขณะนี้"
                                />
                            </div>
                        ))}
                    </Form.Group>




            </div>
        )
    }
}            