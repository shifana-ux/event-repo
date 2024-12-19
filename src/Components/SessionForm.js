import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { createSession } from '../Api/api';
import { useParams } from 'react-router-dom';

const SessionForm = () => {
const {id} = useParams()

  const [formData, setFormData] = useState({
   event_id: id,
    title: '',
    start_time: '',
    end_time: '',
    speaker:'',
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value,event_id:id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData={...formData,
      start_time: new Date(`1970-01-01T${formData.start_time}:00Z`).toISOString(),
      end_time: new Date(`1970-01-01T${formData.end_time}:00Z`).toISOString(),
    }
    try {
      await createSession(formattedData); 
      // Send to backend
      // setFetch(true);
      alert('Session created successfully!');
      setFormData({  title: '', start_time: '', end_time: '' }); // Clear form
    } catch (error) {
      console.error('Error creating session:', error);
      alert(error.response.data.message);
    }
  };

  return (
    <Container className="mt-3" style={{ float: 'left' }}>
      <h2>Create Session</h2>
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group controlId="event_id">
          <Form.Label>Event ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter event ID"
            name="event_id"
            value={formData.event_id}
            onChange={handleChange}
            required
          />
        </Form.Group> */}

        <Form.Group controlId="title" className="mt-3">
          <Form.Label>Session Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter session title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="start_time" className="mt-3">
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="end_time" className="mt-3">
          <Form.Label>End Time</Form.Label>
          <Form.Control
            type="time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="speaker" className="mt-3">
          <Form.Label>Speakers Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter speaker Name"
            name="speaker"
            value={formData.speaker}
            onChange={handleChange}
            required
          />
        </Form.Group>

        

        <Button variant="primary" type="submit" className="mt-4">
          Save
        </Button>

        <Button
          variant="secondary"
          type="button"
          className="mt-4"
          style={{ marginLeft: '10px',textDecoration:'none',color:'white' }} 
         onClick={() => setFormData({ event_id: '', title: '', start_time: '', end_time: '' })}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default SessionForm;
