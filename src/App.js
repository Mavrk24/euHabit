import React from 'react';
import { Form, Button, Container, Col, Row, Modal, FormCheck } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../src/Login';
import Register from '../src/register-login';
import useToken from '../src/useToken';
import Screening from '../src/Screening';
import Main from '../src/Main'
import {useState, setState} from 'react';
import Result from './result';
import { Component } from 'react';
import Entry from './entry';
import {useHistory} from 'react-router-dom'
import NDI from './ndi-rosa';
import ROSA from './rosa';
import Mainpage from './mainpage';
import Profile from './userprofile';
import Intervention from './intervention';
import Workplace from './workplace';
import Information from './information';
import Stretching from './stretching';



function Application() {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleClose = () => setShow(false);
  const history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();
    if (checked === true){
    history.push('/entry');
    }
    else{
      alert('Please agree to our terms & condition.');
    }
  }
  const handleShow = async e => {
    setShow(true);
    setChecked(e.currentTarget.checked)
    e.preventDefault();
  }
    return(
    <div className="wrapper">
          <div className="welcome">
          <h1>ยินดีต้อนรับเข้าสู่</h1> 
          <p id="euHabit">euHabit.</p> 
          <p class="mt-5" id="text-welcome">กรุณาทำแบบสอบถามต่อไปนี้เพื่อประเมินความเสี่ยงต่อการเกิดอาการปวดบริเวณคอของท่าน</p>
          </div>
          <Container>
           <Row>
              <Col>
                <Form id="terms-checkbox">
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check checked={checked} onClick={handleShow} type="checkbox" label="รับทราบและยินยอมปฎิบัติตามข้อตกลงและเงื่อนไขในการให้บริการของ euHabit" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
          
          <Modal id="Modal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
        <Modal.Title>Terms and Privacy</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <p>
       <b> ข้อตกลงการใช้บริการแอปพลิเคชั่น</b><br/>
    ขอต้อนรับสู่ "euHabit" แพลตฟอร์มที่ดำเนินการโดย MNT MediTech โดยร่วมมือกับ ภาควิชาเวชศาสตร์ฟื้นฟู โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย (เรียกแยกและรวมกันว่า "euHabit", "เรา", "พวกเรา", "ของเรา", "หน่วยงาน")
    
    ข้อกำหนดและเงื่อนไขทั้งหมดในเอกสารฉบับนี้ใช้บังคับสำหรับการที่ท่านเข้าใช้งานแอปพลิเคชันทางโทรศัพท์มือถือหรือสมาร์ทโพน ถือว่าท่านรับทราบและยอมรับ เงื่อนไขและข้อกำหนดต่างๆ เหล่านี้ทั้งหมดแล้ว ดังนั้นหากท่านไม่ตกลงที่จะผูกพันตามข้อกำหนดข้อใดข้อหนึ่งหรือทั้งหมด กรุณายกเลิกการใช้แอปพลิเคชันทางโทรศัพท์มือถือหรือสมาร์ทโฟน
    
    หน่วยงานขอสงวนสิทธิในการแก้ไขหรือเปลี่ยนแปลงข้อกำหนดการใช้ นโยบาย หรือคู่มือใดๆ ตลอดเวลาตามดุลยพินิจของหน่วยงานแต่เพียงผู้เดียว ซึ่งการแก้ไขหรือเปลี่ยนแปลงดังกล่าวจะมีผลทันทีเมื่อมีการประกาศฉบับแก้ไข และท่านตกลงสละสิทธิใด ๆ ที่อาจมีในการรับทราบคำบอกกล่าวเกี่ยวกับการแก้ไขเปลี่ยนแปลงดังกลาว ดังนั้นหากท่านไม่เห็นด้วยกับการแก้ไขเปลี่ยนแปลงดังกล่าว กรุณาหยุดการใช้แอปพลิเคชัน
    
    “เนื้อหา ข้อมูล สารสนเทศต่างๆ” ที่แสดงในแอปพลิเคชันนี้ รวบรวมจากแหล่งข้อมูลทางวิชาการที่น่าเชื่อถือและได้รับการตรวจสอบความถูกต้องของข้อมูลโดยแพทย์ผู้เชี่ยวชาญในแต่ละสาขา มีวัตถุประสงค์ สำหรับให้ความรู้ทั่วไป อาจไม่ครบถ้วนทั้งหมด ไม่สามารถทดแทนคำแนะนำของแพทย์สำหรับผู้ป่วยเฉพาะราย หากมีข้อสงสัยควรสอบถามแพทย์
    
    “เนื้อหา ข้อมูล สารสนเทศต่างๆ” ที่แสดงในแอพลิเคชั่นนี้ เรียบเรียงขึ้นตามหลักวิชาการในช่วงเวลาที่จัดทำเท่านั้น การพัฒนาความรู้และการวิจัยใหม่ๆที่เกิดขึ้นในภายหลัง อาจทำให้เกิดข้อแนะนำที่แตกต่างจากนี้ได้
    
    ข้อจำกัดความรับผิดชอบของหน่วยงาน
    ท่านรับทราบและตกลงอย่างชัดแจ้งว่า หน่วยงานไม่มีความรับผิดชอบต่อความผิดพลาดของเนื้อหา (หมายถึง ข้อความ ภาพประกอบ รูปถ่าย เครื่องหมายการค้า ข้อมูล หรือ ส่วนประกอบอื่นใด) ใดๆ ในแอปพลิเคชัน ที่อาจมีผลมาจากการไม่ใช่ข้อมูลล่าสุด หรือมีการพิมพ์ข้อมูลผิดพลาด อันเนื่องมาจากพนักงานของหน่วยงาน หรือข้อมูลรายละเอียดที่ได้มาจากทางผู้จัดด้วย และหน่วยงานขอสงวนสิทธิในการเปลี่ยนแปลงแก้ไขเนื้อหาต่าง ๆ โดยมิต้องแจ้งให้ทราบล่วงหน้า
    เนื้อหา ข้อมูล สารสนเทศต่างๆ บนแอปพลิเคชัน ไม่อยู่ในความรับผิดชอบต่อความเที่ยงตรง ความสมบูรณ์หรือประโยชน์ในการใช้งานของทางหน่วยงาน ทั้งส่วนที่เกิดจากบุคคลที่สาม ผู้หนึ่งผู้ใดที่ใช้บริการ รวมทั้งความคิดเห็นและข้อแนะนำจากพนักงานที่อยู่ในความดูแลของทางหน่วยงานด้วย
    ท่านตกลงรับผิดชอบถึงความเสี่ยงที่อาจเกิดขึ้นจากการการเลือกใช้เครื่องมือเพื่อรองรับการใช้บริการจากแอปพลิเคชัน เช่น โทรศัพท์ คอมพิวเตอร์ ฮาร์ดแวร์ และอุปกรณ์ต่างๆ รวมทั้งค่าบริการ จากการใช้บริการที่เกี่ยวข้อง
    สื่อและข้อมูลในแอปพลิเคชันอาจมีความคลาดเคลื่อนทางเทคนิคหรือสะกดคำผิด นอกจากนี้การให้สื่อ ข้อมูล และบริการในแอปพลิเคชันเป็นลักษณะ "ตามสภาพ" โดยไม่มีเงื่อนไข การรับประกัน หรือข้อกำหนดลักษณะอื่นใด ดังนั้น หน่วยงานปฏิเสธการรับประกันและเงื่อนไขใดๆ ไม่ว่าโดยชัดแจ้งหรือโดยปริยายทั้งปวง ซึ่งรวมถึงแต่ไม่จำกัดเพียงการรับประกันโดยปริยายหรือสภาพความเหมาะสมในการใช้ประโยชน์เชิงพาณิชย์โดยปริยาย คุณภาพที่น่าพึงพอใจ ความเหมาะสมสำหรับวัตถุประสงค์หรือความต้องการในการใช้งานเฉพาะ ความถูกต้อง
    กรรมสิทธิ์ และการไม่ละเมิดลิขสิทธิ์อันเกี่ยวข้องกับแอปพลิเคชันและข้อมูล เนื้อหา และสื่อที่อยู่ในแอปพลิเคชัน หรือการใช้แอปพลิเคชันจะไม่เกิดการหยุดชะงักหรือการใช้แอปพลิเคชันจะเป็นไปตามกฎหมายที่ใช้บังคับกับท่าน หรือการส่งข้อมูลเกี่ยวกับท่านอันเกี่ยวข้องกับแอปพลิเคชันจะสำเร็จ ถูกต้อง หรือส่งอย่างปลอดภัย ทั้งนี้ ข้อปฏิเสธดังกล่าวข้างต้นจะเป็นไปตามเท่าที่กฎหมายอนุญาตให้สามารถกระทำได้
    เท่าที่กฎหมายที่เกี่ยวข้องจะอนุญาตไว้ หน่วยงาน และเจ้าหน้าที่ กรรมการ พนักงาน หรือตัวแทนของหน่วยงาน จะไม่มีความรับผิดสำหรับค่าเสียหายทางตรง ทางอ้อม ค่าเสียหายที่เป็นการลงโทษ หรือที่เป็นผลสืบเนื่อง หรือค่าเสียหายอื่นใดในประเภทใดก็ตาม ซึ่งรวมถึงแต่ไม่จำกัดเพียงการสูญเสียรายได้ กำไร ค่าความนิยม ข้อมูล สัญญา การใช้เงิน หรือการสูญเสียหรือเสียหายอันเนื่องมาจากหรือที่เกี่ยวข้องในทางใดก็ตามกับการหยุดชะงักของธุรกิจ ไม่ว่าในการละเมิด (ซึ่งรวมถึงแต่ไม่จำกัดเพียงความประมาทเลินเล่อ) สัญญา หรือโดยประการอื่น อันเป็นผลมาจากหรือที่เกี่ยวข้องกับการใช้หรือการไม่สามารถใช้แอปพลิเคชัน เนื้อหา หรือสื่อที่อยู่ในแอปพลิเคชันหรือเข้าถึงผ่านแอปพลิเคชัน รวมถึงแต่ไม่จำกัดเพียงค่าเสียหายใดๆ ที่เป็นผลมาจากหรือเกี่ยวข้องกับการที่ผู้ใช้เชื่อถือข้อมูลใดที่ได้รับจากแอปพลิเคชัน หรือจากทางผู้จัด หรือที่เป็นผลมาจากความผิดพลาด การละเว้น การหยุดชะงัก การลบไฟล์หรืออีเมล ข้อผิดพลาด ความบกพร่อง ไวรัส ความล่าช้าในการดำเนินการหรือการส่ง หรือการไม่สามารถปฏิบัติสิ่งใด ไม่ว่าจะเป็นผลมาจากปรากฏการณ์ธรรมชาติ ความล้มเหลวในการสื่อสาร การโจรกรรม การทำลาย หรือการเข้าถึงโดยไม่ได้รับอนุญาต ซึ่งบันทึก โปรแกรม หรือบริการของหน่วยงาน
    ข้อตกลงรับผิดใช้
    ท่านตกลงคุ้มครอง ชดใช้ และปกป้องหน่วยงาน และผู้บริหาร กรรมการ พนักงาน และตัวแทนของบุคคลดังกล่าว จากการเรียกร้อง ค่าเสียหาย ค่าบริการ หนี้สินความรับผิดและค่าใช้จ่ายใดๆ (รวมถึงแต่ไม่จำกัดเพียงค่าทนายความตามสมควร) อันเป็นผลมาจากหรือเกี่ยวข้องกับ (1) การใช้แอปพลิเคชันของท่าน (2) การละเมิดข้อกำหนดและเงื่อนไขการใช้งานนี้ (3) การละเมิดสิทธิของบุคคลอื่นๆ หรือ (4) การกระทำใดๆของคุณที่เกี่ยวข้องกับแอปพลิเคชัน
    
    ข้อกำหนดเกี่ยวกับสิทธิในทรัพย์สินทางปัญญา
    เนื้อหาทั้งหมดที่แสดงในแอปพลิเคชันอยู่ภายใต้กฎหมายเกี่ยวกับทรัพย์สินทางปัญญาทั้งหมด โดยมีหน่วยงาน หรือ บุคคลที่สามซึ่งอนุญาตให้หน่วยงานใช้ เป็นเจ้าของทรัพย์สินทางปัญญา ท่านสามารถใช้เนื้อหาเหล่านั้นประกอบการใช้งานแอปพลิเคชันเท่านั้น ห้ามมิให้มีการทำซ้ำ เนื้อหาเหล่านั้น เพื่อใช้งานในวัตถุประสงค์อื่นๆ
    หน่วยงานสงวนสิทธิในทรัพย์สินทางปัญญาทั้งหมดโดยชัดแจ้งในต้นฉบับทั้งหมด ในด้านเนื้อหา สัญลักษณ์ ตัวอักษร กราฟฟิก การออกแบบ และข้อมูลทั้งหมด โดยท่านตกลงไม่ทำซ้ำ ดาวน์โหลด จัดจำหน่าย เผยแพร่ ส่วนหนึ่งส่วนใดของแอปพลิเคชัน นอกเหนือจากการใช้งานส่วนบุคคล ห้ามลอกเลียน ส่วนหนึ่งส่วนใดของแอปพลิเคชันนี้ไม่ว่ารูปแบบใดๆ นอกจากจะได้รับอนุญาตเป็นลายลักษณ์อักษรจากทางหน่วยงาน ทางหน่วยงานจะไม่รับผิดชอบเกี่ยวกับความผิดพลาดด้านเนื้อหาที่เกิดขึ้น จากการละเมิดลิขสิทธิ์ หรือความเสียหายอันเกิดจากการใช้งานของผู้ใช้บริการ ในกรณีใดๆ ทั้งสิ้น
    ห้ามมิให้ผู้ใช้บริการอัพโหลด เพื่อทำการเปลี่ยนแปลงแก้ไขข้อมูล หรือส่วนต่างๆบนแอปพลิเคชัน โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากทางหน่วยงาน ผู้ฝ่าฝืนต้องรับผิดชอบต่อการกระทำดังกล่าวข้อมูล และสารสนเทศต่างๆ ที่เผยแพร่ผ่านทางแอปพลิเคชัน ถือเป็นกรรมสิทธิ์ของหน่วยงาน ตลอดไป โดยไม่สามารถเรียกร้องเอาคืนด้วยเหตุผล ข้อยกเว้น หรือยกข้อกฎหมายใดมากล่าวอ้างได้ โดยหน่วยงานฯ สามารถทำการใดๆ ต่อข้อมูล และสารสนเทศดังกล่าวได้ ผู้ใช้บริการยอมรับให้ทางหน่วยงานฯ มีสิทธิในการแก้ไข ปรับปรุง ทำซ้ำ เผยแพร่ จำหน่าย ข้อมูล และสารสนเทศต่างๆ ที่อยู่บนแอปพลิเคชันที่เป็นของผู้ใช้บริการได้
    นโยบายความเป็นส่วนตัว
    “เรา” ให้ความสำคัญกับการเก็บรักษาข้อมูลส่วนบุคคลของผู้ใช้บริการ โดยยึดมั่นหลักการ การใช้ ให้น้อยที่สุด ข้อมูลส่วนบุคคลของผู้ใช้บริการจะถูกเปิดใช้เท่าที่จำเป็น เราจะไม่เปิดเผย หรือนำไปใช้ ซึ่งข้อมูลส่วนบุคคลของผู้ใช้บริการ ก่อนได้รับความยินยอมจากผู้ใช้บริการ ทั้งนี้ ไม่รวมการใช้ข้อมูล สำหรับการ “บริการ” ภายใต้ "euHabit" ของ “เรา” การใช้ข้อมูลประกอบการรับคำปรึกษา ของผู้ใช้บริการจาก “แพทย์” หรือ “ผู้ให้คำปรึกษา” ตลอดจนการส่งต่อ หรือ กรณี ฉุกเฉิน
    
    “เรา” รับรองว่าข้อมูลที่จัดเก็บทั้งหมดจะถูกจัดเก็บอย่างปลอดภัย เราปกป้อง และป้องกันข้อมูลส่วนตัวของผู้ใช้บริการโดย
    
    จำกัดการเข้าถึงข้อมูลส่วนตัว
    จัดให้มีวิธีการทางเทคโนโลยีเพื่อป้องกันไม่ให้มีการเข้าสู่ระบบคอมพิวเตอร์ที่ไม่ได้รับอนุญาต ตลอดจนการเข้ารหัสข้อมูล
    หากผู้ใช้บริการพบปัญหา หรือ ช่องโหว่ด้านความปลอดภัย ตลอดจนเหตุให้เชื่อว่าความเป็นส่วนตัวได้ถูกละเมิด กรุณาติดต่อ “เรา” เพื่อทำการตรวจสอบ และ แก้ไขปัญหาดังกล่าว
    ข้อมูลส่วนตัว และ บัญชีส่วนตัว
    เมื่อผู้ใช้บริการสร้างบัญชีผู้ใช้งาน เพื่อใช้บริการ "euHabit" “เรา” จะทำการจัดเก็บข้อมูล ส่วนตัวต่างๆแต่ไม่จำกัดเฉพาะข้อมูลเหล่านี้ของผู้ใช้บริการ
    
    ชื่อ-นามสกุล
    วัน-เดือน-ปี เกิด
    เพศ
    อีเมล
    หมายเลขติดต่อ / หมายเลขโทรศัพท์เคลื่อนที่
    ประวัติสุขภาพ ตลอดจนประวัติการรักษา และ ประวัติการใช้บริการ
    ข้อมูลที่ผู้ใช้บริการได้ทำการส่งมอบให้ “เรา” ผ่านช่องทางต่างๆ เช่นการกรอกข้อมูลใน “แอพ” จะถูกจัดเก็บในระบบ ผู้ใช้บริการมีหน้าที่รับผิดชอบในการส่งมอบข้อมูลที่ถูกต้อง
    
    
    
    
        </p>
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
          <p class="mt-4 Next-button">
          <Button class="btn" onClick={handleSubmit} variant="dark" id="btn-login" type="submit"><b>Next</b></Button>
          </p>
        </div>
          
      );
    }

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }
  else if (token == "register") { 
    return <Register /> 
  }   
  

  return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
      <Application />
    </Route>
    <Route path="/main">
      <Main />
    </Route>
    <Route path="/register">
      <Register />
    </Route>

    <Route exact path='/entry' component={Entry} />
    <Route exact path='/ndi' component={NDI} />
    <Route exact path='/rosa' component={ROSA} />
    <Route exact path='/result' component={Result} />
    <Route exact path='/mainpage' component={Mainpage} />
    <Route exact path='/userprofile' component={Profile} />
    <Route exact path='/intervention' component={Intervention} />
    <Route exact path='/workplace' component={Workplace} />
    <Route exact path='/information' component={Information} />
    <Route exact path='/stretching' component={Stretching} />
  
    </Switch>

  </BrowserRouter>
  )
}

export default App;