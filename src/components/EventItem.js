
  import React from 'react'
  
  const EventItem = ({ info }) => {
    const { event } = info;

    return (
        <div>
        <p>{event.title}</p>
      </div>
    )
  }
  
  export default EventItem