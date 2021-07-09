import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import './ndi-rosa.css';

export default class NDI extends Component{
    render() {
        return(
            <div> 
                <h1 class="mx-5" id="demographic-data"> Neck Disability Index (NDI) </h1>
                <p class="mx-5" id="instruction"> 
                    แบบสอบถามนี้ทำขึ้นเพื่อให้แพทย์ได้รับข้อมูลว่าอาการปวดคอมีผลต่อการใช้ชีวิตประจำวันของท่านอย่างไร เพื่อให้
                    แพทย์สามารถนำมาช่วยวางแผนการรักษาได้อย่างเหมาะสม กรุณาทำเครื่องหมายลงในช่องสี่เหลี่ยมเพียงหนึ่งช่อง
                    ในแต่ละข้อซึ่งอธิบายอาการของท่านในวันนี้ได้ดีที่สุด 
                </p>

{/* คำถาม NDI */}      

                <Form className="data-form px-5">
{/*Q1*/}            <Form.Group className="mb-3">
                        <Form.Label> 1. ความเจ็บปวด </Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label="ยังไม่มีความเจ็บปวดในขณะนี้"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ปวดน้อยมากในขณะนี้"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ปวดปานกลางในขณะนี้"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ปวดค่อนข้างรุนแรงในขณะนี้"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ปวดรุนแรงมากในขณะนี้"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ปวดร้ายแรงที่สุดเท่าที่จะจินตนาการได้ในขณะนี้"
                                />
                            </div>
                        ))}
                    </Form.Group>
        
{/*Q2*/}            <Form.Group className="mb-3">
                        <Form.Label>2. การดูแลตนเอง</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันสามารถดูแลตนเองได้ตามปกติโดยไม่มีความเจ็บปวดเพิ่มขึ้น"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันสามารถดูแลตนเองได้ตามปกติแต่อาจมีความเจ็บปวดเพิ่มขึ้น"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ขณะดูแลตนเองจะมีอาการเจ็บปวดทำให้ต้องทำช้า ๆ และระมัดระวัง"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันต้องการความช่วยเหลือบ้างแต่ยังสามารถดูแลตนเองได้เป็นส่วนใหญ"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันต้องการความช่วยเหลือทุกวันในการดูแลตนเองเกือบทุกด้าน"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันไม่สามารถแต่งตัวเองได้,ฉันอาบน้ำตนเองด้วยความยากลำบากและต้องอยู่บนเตียง"
                                />
                            </div>
                        ))}
                    </Form.Group>

               
{/*Q3*/}            <Form.Group className="mb-3">
                        <Form.Label>2. การดูแลตนเอง</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันสามารถดูแลตนเองได้ตามปกติโดยไม่มีความเจ็บปวดเพิ่มขึ้น"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันสามารถดูแลตนเองได้ตามปกติแต่อาจมีความเจ็บปวดเพิ่มขึ้น"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ขณะดูแลตนเองจะมีอาการเจ็บปวดทำให้ต้องทำช้า ๆ และระมัดระวัง"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันต้องการความช่วยเหลือบ้างแต่ยังสามารถดูแลตนเองได้เป็นส่วนใหญ"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันต้องการความช่วยเหลือทุกวันในการดูแลตนเองเกือบทุกด้าน"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันไม่สามารถแต่งตัวเองได้,ฉันอาบน้ำตนเองด้วยความยากลำบากและต้องอยู่บนเตียง"
                                />
                            </div>
                        ))}
                    </Form.Group>

{/*Q4*/}            <Form.Group className="mb-3">
                        <Form.Label>2. การดูแลตนเอง</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันสามารถดูแลตนเองได้ตามปกติโดยไม่มีความเจ็บปวดเพิ่มขึ้น"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันสามารถดูแลตนเองได้ตามปกติแต่อาจมีความเจ็บปวดเพิ่มขึ้น"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ขณะดูแลตนเองจะมีอาการเจ็บปวดทำให้ต้องทำช้า ๆ และระมัดระวัง"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันต้องการความช่วยเหลือบ้างแต่ยังสามารถดูแลตนเองได้เป็นส่วนใหญ"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันต้องการความช่วยเหลือทุกวันในการดูแลตนเองเกือบทุกด้าน"
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label="ฉันไม่สามารถแต่งตัวเองได้,ฉันอาบน้ำตนเองด้วยความยากลำบากและต้องอยู่บนเตียง"
                                />
                            </div>
                        ))}
                    </Form.Group>


                </Form>

            </div>
        )
    }
}