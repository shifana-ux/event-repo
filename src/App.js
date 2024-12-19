import React, { useState } from 'react';
import Event from './Components/Event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
import EventForm from './Components/EventForm';
import { Col, Container, Row } from 'react-bootstrap';
import Page2 from './Components/Page2';
import EventList from './Components/EventList';
import Page1 from './Components/Page1';
import Page3 from './Components/Page3';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Page4 from './Components/Page4';
import SessionForm from './Components/SessionForm';
import View from './Components/View';
import Viewsession from './Components/Viewsession';
import EditEvent from './Components/EditEvent';
import ManageSession from './Components/ManageSession';
import EditSession from './Components/EditSession';

function App() {

  const [fetch,setFetch] = useState(false)
  console.log(fetch);
  
  return (
    <div>
      <Container fluid>
        <Row>
          <Event />
        </Row>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={9}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div>
                      <EventList fetch={fetch} />
                      <EventForm setFetch={setFetch} />
                      
                    </div>
                  }
                />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/EventList/:id" element={<EventList />} />
                <Route path="/Page2" element={<Page2 />} />
                <Route path="/Page3" element={<Page3 />} />
                <Route path="/Page4" element={<Page4 />} />
                <Route path="/Page5" element={<Page5/>} />
                <Route path='/Page6' element={<Page6 />} />
                <Route path='/sessionform/:id' element={<SessionForm />} />
                <Route path='/view/:id' element={<View />} />
                <Route path='/viewsession' element={<Viewsession />} />
                <Route path='/EditEvent/:id' element={<EditEvent />} />
                <Route path='/managesession/:id' element={<ManageSession />} />
                <Route path='/EditSession/:id' element={<EditSession />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
