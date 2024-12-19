import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Sidebar() {
  return (
    <div>
      <div className="d-flex" style={{ height: '120vh' ,width:'300px',padding:'3px'}}>
        {/* Sidebar */}
        <div className="sidebar bg-primary text-white" style={{borderRadius:'4px'}}>
         
          <Nav className="flex-column mt-1 " style={{gap:'5px'}} >
            <Nav.Link href="/" className="text-white px-3">Create Event</Nav.Link>
            <Nav.Link href="/Page3" className="text-white px-3">View Events</Nav.Link>
            {/* <Nav.Link href="/EventList" className="text-white px-3">Event list</Nav.Link> */}
            <Nav.Link href="/Page2" className="text-white px-3">Create Session</Nav.Link>
            <Nav.Link href="/Viewsession" className="text-white px-3">View Sessions</Nav.Link>
            {/* <Nav.Link href="/Page4" className="text-white px-3">Create Speaker</Nav.Link>
            <Nav.Link href="/Page5" className="text-white px-3">View Speakers</Nav.Link> */}
            <Nav.Link href="/Page6" className="text-white px-3">Optimized Schedule</Nav.Link>
           
          </Nav>
        </div>
        </div>
    </div>
  )
}

export default Sidebar
