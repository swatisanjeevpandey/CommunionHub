import { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-03-20", category: "Charity" },
    { title: "Community Prayer", date: "2025-03-15", category: "Religious" }
  ]);

  const addEvent = (event) => setEvents([...events, event]);

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};
