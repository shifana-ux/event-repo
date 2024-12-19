import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchEvents } from '../Api/api';

function Page2() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const styles = {
    container: {
      padding: '20px',
    },
    card: {
      marginBottom: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    button: {
      marginRight: '10px',
      borderRadius: '5px',
      padding: '10px 15px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: '20px' }}>Sessions</h2>
      {events.map((event) => (
        <Card key={event._id} style={styles.card}>
          <Card.Header>{event.title}</Card.Header>
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>
              <strong>Description:</strong> {event.description}
              <br />
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
              <br />
              <strong>Location:</strong> {event.location}
            </Card.Text>
            <Button variant="primary" style={styles.button}>
              <a href={`/sessionform/${event._id}`} style={{ textDecoration: 'none', color: 'white' }}>Create Session</a>
            </Button>
            <Button variant="danger" style={styles.button}>
              <a href={`/managesession/${event._id}`} style={{ textDecoration: 'none', color: 'white' }}> Manage session</a>
             
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Page2;