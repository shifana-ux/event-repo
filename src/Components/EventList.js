import Table from 'react-bootstrap/Table';
import React, { useEffect,useState } from 'react'
import { deleteEvent, fetchEvents } from '../Api/api';
import { useParams } from 'react-router-dom';



const EventList = ({fetch}) => {
  const {id} = useParams()
  console.log(id)

  console.log(fetch);
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
    .then((response)=> setEvents(response.data))
    .catch((error)=> console.error('Error fetching events:',error));
  }, []);


  if(fetch){
    fetchEvents()
    .then((response)=> setEvents(response.data))
    .catch((error)=> console.error('Error fetching events:',error));    
  }

  //delete function

  const handleDelete = (id) => {
    deleteEvent(id)
    .then(()=>{
      setEvents((prevEvents)=> prevEvents.filter((event)=> event._id !== id))
    })
  }

  return (
    <div>
        <h1>Event List</h1>
      <Table striped="columns" style={{justifyContent:'flex'}}>
        
      <thead>
      <tr>
         <th style={{backgroundColor:'#007afe'}}>Title</th>
          <th style={{backgroundColor:'#007afe'}}>Date</th>
          <th style={{backgroundColor:'#007afe'}}>Location</th>
          <th style={{backgroundColor:'#007afe'}}>Actions</th>
        </tr>
      </thead>
      <tbody>

      {events.map((event,index)=>
      <tr key={index}>
        <td>{event.title}</td>
       <td>{new Date(event.date).toLocaleDateString()}</td>
        <td>{event.location}</td>
        <td>
        <button className="btn btn-success btn-sm"><a href={`/view/${event._id}`} style={{textDecoration:"none",color:"white"}}>View</a></button>
          <button className="btn btn-primary btn-sm me-2"><a href={`/EditEvent/${event._id}`}  style={{textDecoration:"none",color:"white"}}>Edit</a></button>
                <button type='button' onClick={() => handleDelete(event._id)} className="btn btn-danger btn-sm me-2"><a  style={{textDecoration:"none",color:"white"}}>Delete</a></button>
                </td>
        
       
      </tr>
      )}

        
      
        </tbody>
    </Table>
    </div>
  )
}

export default EventList
