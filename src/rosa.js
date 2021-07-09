import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import './rosa.css';

export default class ROSA extends Component{
    render() {
        return(
            <div> 
                <h1 class="mx-5 pb-3" id="demographic-data"> 
                    rapid office strain assessment (ROSA) <br/>
                    <p class="mt-2" id="survey"> แบบประเมินความเสี่ยงทางการยศาสตร์ด้วยวิธีโรซ่า </p>
                </h1> 
                
                <p class="mx-5 p-3" id="instruction"> 
                    แบบสอบถามนี้ทำขึ้นเพื่อวิเคราะห์สถานีงานและท่าทางการนั่งทำงานกับคอมพิวเตอร์โดยประเมินจาก
                    1. ระดับของจอคอมพิวเตอร์และลักษณะการใช้โทรศัพท์สำนักงาน 
                    2. การใช้เมาส์และแป้นพิมพ์
                    กรุณาทำเครื่องหมายลงในช่อง "ทุกช่องที่ตรงกับคุณ"
                </p>

{/*คำถาม ROSA*/}
                <p className="px-5 mb-2"> การวิเคราะห์จอมอนิเตอร์และโทรศัพท์ </p>

{/* เพิ่มภาพประกอบในตัวเลือกด้วย */}

                <Form className="px-5" id="screening-form">
{/*Q1 ข้อ 8*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label> 1. จอมอนิเตอร์ (Monitor) </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="จอห่างจากลำตัว 1 ช่วงความยาวแขน (40-75 ซม.) และจอสูงระดับดวงตา"
                                />
        {/* = 2 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="จอต่ำเกินไป (ต่ำกว่า 30 องศา)"
                                />
        {/* = 3 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="จอสูงเกินไป (แหงนคอ)"
                                />
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="หมุนคอมากกว่า 30 องศา"
                                />
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="มีแสงจ้าที่หน้าจอ"
                                />
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="เอกสารไม่มีที่วาง"
                                />
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="หน้าจอไกลเกินไป"
                                />
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="ใช้งานต่อเนื่องมากกว่า 1 ชม. หรือมากกว่า 4 ชม./วัน"
                                />
        {/* + 0 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="ใช้งานต่อเนื่อง 30 นาที - 1 ชม. หรือมากกว่า 1-4 ชม./วัน"
                                />
        {/* - 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="ใช้งานต่อเนื่องน้อยกว่า 30 นาที หรือน้อยกว่า 1 ชม./วัน"
                                />
                            </div>
                        ))}
                    </Form.Group>
                </Form>


            </div>
        )
    }
}            

