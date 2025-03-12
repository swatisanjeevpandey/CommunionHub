import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import Navbar from "./Navbar";
import "./Events.css";

const Events = () => {
  const { events, addEvent } = useContext(EventContext);
  const [filter, setFilter] = useState("All");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "" });

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.category) {
      addEvent(newEvent);
      setNewEvent({ title: "", date: "", category: "" });
    }
  };

  return (
    <div className="events">
      <Navbar />
      <h2>Event Listings</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <ul>
        {filteredEvents.map((event, index) => (
          <li key={index}>
            <h3>{event.title}</h3>
            <p>{event.date} - {event.category}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Event Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} required />
        <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} required />
        <select value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })} required>
          <option value="">Select Category</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default Events;
