import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { fetchEventById, updateEvent } from "../Api/api"; // Updated to fetch a single event
import { useParams, useNavigate } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams(); // Event ID from URL
  const navigate = useNavigate(); // To redirect after editing
  const [events, setEvents] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch event details by ID on mount
  useEffect(() => {
    fetchEventById(id)
      .then((response) => {
        const event = response.data;
        setEvents({
          title: event.title || "",
          description: event.description || "",
          date: event.date ? event.date.split("T")[0] : "", // Format date for input
          location: event.location || "",
        });
        setLoading(false); // Data fetched, loading complete
      })
      .catch((error) => {
        console.error("Error fetching event:", error);
        alert("Failed to fetch event details. Please try again.");
        navigate("/eventlist"); // Redirect if the event doesn't exist
      });
  }, [id, navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvents({
      ...events,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fffffffffff");
    
    console.log("Form Data Submitted:", events);
    updateEvent(id, events)
      .then(() => {
        alert("Event updated successfully!");
        navigate("/"); // Redirect to event list
      })
      .catch((err) => {
        console.error("Error updating event:", err);
        alert("Failed to update the event. Please try again.");
      });
  };

  if (loading) {
    return <p>Loading event details...</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Edit Event</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter event title"
            value={events.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Enter the Description of the event"
            rows={3}
            value={events.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={events.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Enter the location of the event"
            value={events.location}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditEvent;
