import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchEventById } from '../Api/api';


function View() {
    const [events, setEvents] = useState([]);
    const {id}=useParams();

    useEffect(()=>{
        fetchEventById(id)
        .then((response)=>setEvents([response.data]))
        .catch((error)=>console.error('Error fetching events:',error));
    },[id]);

  return (
    <div className='container mt-5'>
        <h1 className='text-center mb-4'>Events</h1>
        <div className='event-list'>
        {events.map((event)=>(
            <div  className='event-item mb-4 p-3 border rounded bg-light'>
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p><strong>Location:</strong> {event.location}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default View
