import React from 'react';
import EventType from './EventType';

const eventObj = [
    {
        title: "EventOne",
        time: "08:00",
        comment: "1st event"
     },
    {
        title: "EventTwo",
        time: "09:00",
        comment: "2nd event"
    },
    {
        title: "EventThree",
        time: "10:00",
        comment: "3rd event"
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
