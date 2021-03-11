import React from 'react';
import EventType from './EventType';

const eventObj = [
    {
        title: "EventOne",
        time: "1pm",
     },
    {
        title: "EventTwo",
        time: "2pm",
    },
    {
        title: "EventThree",
        time: "3pm",
    },
  ]

  const eventList = eventObj.map((event, index) => {
                 return <EventType { ...event} key={index}/>
  })

const Events = () => {
    return (
        <div>
           {eventList} 
        </div>
    );
}

export default Events;
