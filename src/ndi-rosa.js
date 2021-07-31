import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import { useHistory } from 'react-router-dom';
import './ndi-rosa.css';

export default class NDI extends Component{
    render() {
        return(
            <div> 
                <h1 class="mx-5 pb-3" id="demographic-data1"> Neck Disability Index (NDI) </h1>
                <p class="mx-5 p-3" id="instruction1"> 
                    แบบสอบถามนี้ทำขึ้นเพื่อรับข้อมูลว่าอาการปวดคอมีผลต่อการใช้ชีวิตประจำวันของท่านอย่างไร
                    กรุณาทำเครื่องหมายลงในช่องเพียงหนึ่งช่อง
                    ในแต่ละข้อซึ่งอธิบายอาการของท่านในวันนี้ได้ดีที่สุด 
                </p>

{/* คำถาม NDI */}      

                <Form className="px-5" id="screening-form1">
{/*Q1*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1"> 1. ความเจ็บปวด </Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ยังไม่มีความเจ็บปวดในขณะนี้"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ปวดน้อยมากในขณะนี้"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ปวดปานกลางในขณะนี้"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ปวดค่อนข้างรุนแรงในขณะนี้"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ปวดรุนแรงมากในขณะนี้"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi1"
                                    label="ปวดร้ายแรงที่สุดเท่าที่จะจินตนาการได้ในขณะนี้"
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>
        
{/*Q2*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">2. การดูแลตนเอง</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi2"
                                    label="ฉันสามารถดูแลตนเองได้ตามปกติโดยไม่มีความเจ็บปวดเพิ่มขึ้น"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi2"
                                    label="ฉันสามารถดูแลตนเองได้ตามปกติแต่อาจมีความเจ็บปวดเพิ่มขึ้น"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi2"
                                    label="ขณะดูแลตนเองจะมีอาการเจ็บปวดทำให้ต้องทำช้า ๆ และระมัดระวัง"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi2"
                                    label="ฉันต้องการความช่วยเหลือบ้างแต่ยังสามารถดูแลตนเองได้เป็นส่วนใหญ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi2"
                                    label="ฉันต้องการความช่วยเหลือทุกวันในการดูแลตนเองเกือบทุกด้าน"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi2"
                                    label="ฉันไม่สามารถแต่งตัวเองได้,ฉันอาบน้ำตนเองด้วยความยากลำบากและต้องอยู่บนเตียง"
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

               
{/*Q3*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">3. การยกของ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi3"
                                    label="ฉันสามารถยกของหนักได้โดยไม่มีการเจ็บปวดเพิ่มเติม"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi3"
                                    label="ฉันสามารถยกของหนักได้แต่มีการเจ็บปวดเพิ่มเติม"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi3"
                                    label="อาการปวดทำให้ฉันไม่สามารถยกของหนักสูงขึ้นจากพื้น แต่ฉันสามารถยกได้ถ้าของอยู่ในตำแหน่งที่สามารถ
                                    ทำให้ยกได้ง่ายมากขึ้น เช่น วางอยู่บนโต๊ะ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi3"
                                    label="อาการปวดทำให้ฉันไม่สามารถยกของน้ำหนักเบาถึงปานกลางสูงขึ้นจากพื้น แต่ฉันสามารถยกได้ถ้าของอยู่ใน
                                    ตำแหนงที่ง่ายขึ้น เช่น ถ้าของอยู่บนโต๊ะ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi3"
                                    label="ฉันสามารถยกของที่เบามาก ๆ ได้"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi3"
                                    label="ฉันไม่สามารถยกหรือถืออะไรได้เลย"
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q4*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">4. การอ่านหนังสือ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi4"
                                    label="ฉันสามารถอ่านหนังสือได้เท่าที่ต้องการโดยไม่มีอาการปวดคอ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi4"
                                    label="ฉันสามารถอ่านหนังสือได้เท่าที่ต้องการโดยมีอาการปวดคอเล็กน้อย"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi4"
                                    label="ฉันสามารถอ่านหนังสือได้เท่าที่ต้องการโดยมีอาการปวดคอปานกลาง"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi4"
                                    label="ฉันไม่สามารถอ่านหนังสือได้เท่าที่ต้องการเพราะปวดต้นคอปานกลาง"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi4"
                                    label="ฉันอ่านหนังสือได้อย่างยากลำบากเพราะอาการปวดคอรุนแรง"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi4"
                                    label=" ฉันไม่สามารถอ่านหนังสือได้เลย"
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q5*/}            <Form.Group className="mb-3 px-4">
                    <Form.Label id="question1">5. อาการปวดศีรษะ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi5"
                                    label="ฉันไม่มีอาการปวดศีรษะเลย"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi5"
                                    label="ฉันมีอาการปวดศีรษะเล็กน้อยไม่บ่อย"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi5"
                                    label="ฉันมีอาการปวดศีรษะปานกลางไม่บ่อย"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi5"
                                    label="ฉันมีอาการปวดศีรษะปานกลางบ่อย ๆ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi5"
                                    label="ฉันมีอาการปวดศีรษะรุนแรงบ่อย ๆ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi5"
                                    label=" ฉันมีอาการปวดศีรษะเกือบตลอดเวลา"
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q6*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">6. การมีสมาธิ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi6"
                                    label="ฉันสามารถมีสมาธิเต็มที่เมื่อฉันต้องการโดยไม่ได้ยากลำบากนัก"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi6"
                                    label="ฉันสามารถมีสมาธิเต็มที่เมื่อฉันต้องการโดยยากลำบากเล็กน้อย"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi6"
                                    label="ฉันมีความยากลำบากกลาง ๆ ที่จะมีสมาธิเมื่อฉันต้องการ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi6"
                                    label="ฉันมีความยากลำบากมากที่จะมีสมาธิเมื่อฉันต้องการ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi6"
                                    label="ฉันมีความยากลำบากมาก ๆ ที่จะมีสมาธิเมื่อฉันต้องการ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi6"
                                    label="ฉันไม่สามารถมีสมาธิได้เลย"
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q7*/}            <Form.Group className="mb-3 px-4">
                    <Form.Label id="question1">7. การทำงาน</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi7"
                                    label="ฉันสามารถทำงานได้มากเท่าที่ต้องการ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi7"
                                    label="ฉันสามารถทำงานปกติทั่วไปได้แต่ไม่มากกว่านี้"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi7"
                                    label="ฉันทำงานปกติทั่วไปส่วนใหญ่ได้แต่ไม่มากกว่านี้"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi7"
                                    label="ฉันไม่สามารถทำงานปกติทั่วไปได้"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi7"
                                    label=" ฉันทำงานได้ด้วยความยากลำบาก"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi7"
                                    label=" ฉันไม่สามารถทำงานได้เลย"
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q8*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">8. การขับรถ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi8"
                                    label="ฉันขับรถได้โดยไม่มีอาการปวดคอ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi8"
                                    label="ฉันขับรถได้ไกลเท่าที่ฉันต้องการโดยมีอาการปวดต้นคอเล็กน้อย"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi8"
                                    label="ฉันขับรถได้ไกลเท่าที่ต้องการโดยมีอาการปวดต้นคอปานกลาง"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi8"
                                    label="ฉันไม่สามารถขับรถได้ไกลเท่าที่ต้องการเพราะอาการปวดคอปานกลาง"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi8"
                                    label="ฉันขับรถได้ด้วยความยากลำบากเนื่องจากปวดต้นคออย่างรุนแรง"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi8"
                                    label="ฉันไม่สามารถขับรถได้เลย"
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q5*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">9. การนอนหลับ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi9"
                                    label="ฉันไม่มีปัญหาเรื่องการนอนหลับเลย"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi9"
                                    label="การนอนหลับของฉันถูกรบกวนน้อยมาก (นอนไม่หลับน้อยกว่า 1 ชั่วโมง)"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi9"
                                    label="การนอนหลับของฉันถูกรบกวนเล็กน้อย (นอนไม่หลับ 1-2 ชั่วโมง)"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi9"
                                    label="การนอนหลับของฉันถูกรบกวนปานกลาง (นอนไม่หลับ 2-3 ชั่วโมง)"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi9"
                                    label="การนอนหลับของฉันถูกรบกวนรุนแรง (นอนไม่หลับ 3-5 ชั่วโมง)"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi9"
                                    label="การนอนหลับของฉันถูกรบกวนอย่างสมบูรณ์แบบ (นอนไม่หลับ 5-7 ชั่วโมง)"
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q10*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">10. กิจกรรมนันทนาการ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi10"
                                    label="ฉันสามารถเข้าร่วมกิจกรรมนันทนาการของฉันได้ทุกอย่างโดยไม่มีอาการปวดคอ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi10"
                                    label="ฉันสามารถเข้าร่วมกิจกรรมนันทนาการของฉันได้ทุกอย่างโดยมีปวดคอบ้าง"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi10"
                                    label=" ฉันสามารถเข้าร่วมกิจกรรมนันทนาการได้เป็นส่วนใหญ่แต่ไม่ทั้งหมดเนื่องจากอาการปวดคอ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi10"
                                    label="ฉันสามารถเข้าร่วมกิจกรรมนันทนาการของฉันได้บ้างเพราะปวดคอ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi10"
                                    label="ฉันเข้าร่วมกิจกรรมนันทนาการได้อย่างยากลำบากเพราะปวดคอ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="ndi10"
                                    label="ฉันไม่สามารถเข้าร่วมกิจกรรมนันทนาการได้เลย"
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>                
                </Form>
            
                <p id="Nxtbutton1">
                    <Button class="btn" id="btn-login" type="submit" href="/rosa"><b>Next</b></Button>
                </p>

            </div>
        )
    }
}