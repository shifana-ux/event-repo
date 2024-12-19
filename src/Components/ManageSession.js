import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {fetchsessionByEventId } from '../Api/api'; // Fetch function from your API
import { deleteSession } from '../Api/api';
import { Button } from 'react-bootstrap';

function ManageSession() {
    const {id} = useParams()
    console.log(id)
  const [sessions, setSessions] = useState([]);
   // Updated to store session data directly

  // Fetch session data on component mount
  useEffect(() => {
    fetchsessionByEventId(id)
      .then((response) => setSessions(response.data)) // Assuming response.data contains the session list
      .catch((error) => console.error('Error fetching sessions:', error));
  }, [id]);


  const handleDelete = (id) => {
      deleteSession(id)
      .then(()=>{
        setSessions((prevEvents)=> prevEvents.filter((event)=> event._id !== id))
      })
    }
  // Inline styles for better readability
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
    link: {
      textDecoration: 'none',
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: '20px' }}>Sessions</h2>
      {sessions.length > 0 ? (
        sessions.map((session) => (
          <Card key={session._id} style={styles.card}>
            <Card.Header>{session.title}</Card.Header>
            <Card.Body>
              <Card.Title>{session.title}</Card.Title>
              <Card.Text>
                <strong>Event:</strong> {session.event_id}
                <br />
                <strong>Start Time:</strong> {new Date(session.start_time).toLocaleDateString()}
                <br />
                <strong>End Time:</strong> {session.end_time}
                <br />
                <strong>Speaker:</strong> {session.speaker}
                {/* <strong>Created at:</strong> {session.Created_at|| 'No location'}
                <strong>Updated at:</strong> {session.Updated_at|| 'No location'} */}
              </Card.Text>
              <Button variant='primary' style={styles.button} href={`/editsession/${session._id}`} >Edit</Button>
              <Button variant='primary' onClick={() => handleDelete(session._id)} >Delete</Button>
              
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No sessions available at the moment.</p>
      )}
    </div>
  );
}

export default ManageSession;
