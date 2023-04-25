import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction";
import { v4 as uuid } from "uuid";
import EventItem from './EventItem'

const EventActivityForSchedule = () => {
    const [events, setEvents] = useState([]);
    const handleSelect = (info) => {
        const { start, end } = info;
        const eventNamePrompt = prompt("Enter, event name");
        if (eventNamePrompt) {
          setEvents([
            ...events,
            {
              start,
              end,
              title: eventNamePrompt,
              id: uuid(),
            },
          ]);
        }
      };
  return (
    <div>
        <FullCalendar
        editable
        selectable
        events={events}
        select={handleSelect}
        headerToolbar={{
            start: "today prev next",
            end: "dayGridMonth dayGridWeek dayGridDay",
          }}
          eventContent={(info) => <EventItem info={info} />}
    plugins={[ dayGridPlugin, interactionPlugin ]}
    initialView="dayGridMonth"
    
   
    /></div>
  )
}

export default EventActivityForSchedule