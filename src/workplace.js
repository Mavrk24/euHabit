import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import Image from 'react-bootstrap/Image';
import rosa11 from './rosa11.png';
import rosa12 from './rosa12.png';
import rosa13 from './rosa13.png';

export default class Workplace extends Component{
    render() {
        return(
            <div> 
                <h1 class="mx-5 pb-3" id="demographic-data"> 
                    Workplace condition <br/>
                    <p class="mt-2" id="survey"> แบบประเมินสภาพแวดล้อมในการนั่งทำงาน </p>
                </h1> 
                
                <p class="mx-5 p-3" id="instruction"> 
                    แบบสอบถามนี้ทำขึ้นเพื่อวิเคราะห์และท่าทางการนั่งทำงาน/เรียนกับคอมพิวเตอร์หรืออุปกรณ์อิเล็กทรอนิกส์โดยประเมินจาก <br/>
                    กรุณาทำเครื่องหมายลงในช่อง "ทุกช่องที่ตรงกับคุณ"
                </p>

                <Form className="px-5 mb-3 mx-3" id="screening-form">
                    
                <p className="mb-2 pt-2" id="qtitle"> โต๊ะ เก้าอี้ </p>   

                
{/*Q1 ข้อ 1*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">1. ข้อใดเป็นจริงเกี่ยวกัยโต๊ะของท่าน </Form.Label>
                            <div className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id="q11"
                                    name="q11"
                                    label="ท่านต้องก้มหลังเมื่อต้องการทำงานที่โต๊ะ"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id="q11"
                                    name="q11"
                                    label="ท่านรู้สึกสบายเมื่อทำงานที่โต๊ะ"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
        {/* = 3 point */}       <Form.Check
                                    type="radio"
                                    id="q11"
                                    name="q11"
                                    label="ท่านรู้สึกว่าไหล่ของท่านยกเมื่อทำงานที่โต๊ะ"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa13} height="75" width="75"/ >
                                </svg>
                            </div>
                        ))}
                    </Form.Group>

                
{/*Q1 ข้อ 2*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">2. ข้อใดสอดคล้องกับความจริงมากที่สุด </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q12"
                                    label="ท่านไม่มีที่พักแขน"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q12"
                                    label="ท่านมีที่พักแขนที่สามารถวางแขนได้สะดวก"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
        {/* = 3 point */}       <Form.Check
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q12"
                                    label="ท่านมีที่พักแขน แต่ไม่สะดวกจะวางแขน"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa13} height="75" width="75"/ >
                                </svg>
                            </div>
                        ))}
                    </Form.Group>

                    <p className="mb-2 pt-2" id="qtitle"> หน้าจอคอมพิวเตอร์หรือแท็บเลต </p>   

{/*Q2 ข้อ 1*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">1. เมื่อท่านมองหน้าจอท่านพบว่า </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q21"
                                    label="ท่านต้องเงยหน้าเพื่อมองหน้าจอ"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q21"
                                    label="ท่านสามารถมองหน้าจอด้วยสายตาในแนวระดับหรือเหลือบลงเล็กน้อย"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
        {/* = 3 point */}       <Form.Check
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q21"
                                    label="ท่านต้องก้มลงเพื่อมองหน้าจอ"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa13} height="75" width="75"/ >
                                </svg>
                            </div>
                        ))}
                    </Form.Group>

{/*Q2 ข้อ 2*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">2. ระยะห่างระหว่างท่านกับหน้าจอมีระยะประมาณ </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q22"
                                    label="ต่ำกว่า 45 เซนติเมตร"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q22"
                                    label="ประมาณ 45-70 เซนติเมตร"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
        {/* = 3 point */}       <Form.Check
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q22"
                                    label="มากกว่า 70 เซนติเมตร"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa13} height="75" width="75"/ >
                                </svg>
                            </div>
                        ))}
                    </Form.Group>

{/*Q2 ข้อ 3*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">3. ขณะมองหน้าจอ ศีรษะของท่านตรงและอยู่กลางไหล่ทั้งสองข้าง (ไม่ต้องเอียงคอ) </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q23"
                                    label="ใช่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q23"
                                    label="ไม่ใช่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
                            </div>
                        ))}
                    </Form.Group>

                    <p className="mb-2 pt-2" id="qtitle"> การเขียนหนังสือ </p>   

{/*Q3 ข้อ 1*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">1. แขนสองข้างขนานกับพื้นหรือเอียงน้อย และข้อศอกอยู่ข้างลำตัว </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q31"
                                    label="ใข่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q31"
                                    label="ไม่ใช่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
                            </div>
                        ))}
                    </Form.Group>

{/*Q3 ข้อ 2*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">2. ข้อมืองอมากจนรู้สึกปวดเมื่อย </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q32"
                                    label="ใข่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q32"
                                    label="ไม่ใช่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
                            </div>
                        ))}
                    </Form.Group>

{/*Q3 ข้อ 3*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">3. เหยียดแขนขณะเขียนหนังสือ </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q33"
                                    label="ใข่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q33"
                                    label="ไม่ใช่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
                            </div>
                        ))}
                    </Form.Group>

{/*Q3 ข้อ 4*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">4. ข้อศอกทำมุมฉากหรือ 90 องศากัน </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q34"
                                    label="ใข่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q34"
                                    label="ไม่ใช่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
                            </div>
                        ))}
                    </Form.Group>

{/*Q3 ข้อ 5*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">5. เกร็งข้อมือขณะจับปากกา </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q35"
                                    label="ใข่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={`default-${type}`}
                                    name="q35"
                                    label="ไม่ใช่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
                            </div>
                        ))}
                    </Form.Group>


                    <p className="mb-2 pt-2" id="qtitle"> ระยะเวลาในการใช้งานอุปกรณ์อิเล็กทรอนิกส์ </p>   

{/*Q4 ข้อ 1*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">1. ท่านนั่งเป็นเวลากี่ชั่วโมงต่อวัน (กรุณาตอบเป็น หน่วย ชั่วโมง และ นาที เช่น 1 ชั้วโมง 30 นาที ให้ตอบเป็น 1:30) </Form.Label>
                            <input name="duration"id="duration" type="text" size="30" placeholder="ชั่วโมง:นาที" required 
                            className="form-control mb-3" />
                    </Form.Group>


                </Form>

                <p id="Nxtbutton2">
                    <Button class="btn" id="btn-login" type="submit" href="/mainpage"><b>mainpage</b></Button>
                </p>
            </div>
        )
    }
}