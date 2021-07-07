import React from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../src/Login';
import useToken from '../src/useToken';
import Screening from '../src/Screening';
import Main from '../src/Main'


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <div className="welcome">
      <h1>ยินดีต้อนรับเข้าสู่</h1> 
      <p id="euHabit">euHabit</p> 
      <p>กรุณาทำแบบสอบถามต่อไปนี้เพื่อประเมินความเสี่ยงต่อการเกิดอาการปวดบริเวณคอของท่าน</p>
      </div>
      <Container>
        <Row>
          <p class="terms-and-privacy mt-3">
            Terms and Privacy <br/>
            รับทราบและยินยอมปฎิบัติตามข้อตกลงและเงื่อนไขในการให้บริการของ euHabit
          </p>
        </Row>
        <Row>
          <Col>
            <Form id="terms-checkbox">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <p class="mt-4 Next-button">
      <Button class="btn btn-login" type="submit" href="/screening" >Next</Button>
      </p>




      <BrowserRouter>
        <Switch>
        <Route path="/screening">
          <Screening />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
      
  );
}

export default App;