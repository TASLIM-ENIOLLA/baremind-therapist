import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 

const EventForScheduleOnHome = () => {
  return (
    <div>
        <FullCalendar
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth"
    
    events={[
        { title: 'event 1', date: '2023-03-13' },
        { title: 'event 2', date: '2023-03-22' },
        { title: 'event 3', date: '2023-03-24' },
        { title: 'event 4', date: '2023-04-20' },
      ]}
    /></div>
  )
}

export default EventForScheduleOnHome