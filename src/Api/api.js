import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3400' }); // Backend base URL

// Functions to communicate with the backend
export const fetchEvents = () => API.get('/events');            // Get all events
export const createEvent = (eventData) => API.post('/events', eventData); // Add an event

export const createSession = (sessionData) => API.post('/sessions', sessionData); // Add a session

export  const fetchEventById = (eventId) => API.get(`/events/${eventId}`); // Get an event by ID

export const fetchsession = () => API.get('/sessions'); // Get all sessions

export const deleteEvent = (eventId) => API.post(`/events/${eventId}`); // Delete an event

export const updateEvent = (eventId, eventData) => API.post(`/events/update/${eventId}`, eventData); // Update an event

export const fetchsessionByEventId = (eventId) => API.get(`/sessions/session/${eventId}`);

export const deleteSession = (sessionId) => API.post(`/sessions/${sessionId}`);

export  const updatesession = (sessionId, sessionData) => API.post(`/sessions/update/${sessionId}`, sessionData);