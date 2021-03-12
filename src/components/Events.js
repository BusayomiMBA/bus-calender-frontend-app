import React from 'react';
import EventType from './EventType';

const Events = (props) => {
  const eventLists = props.eventList.map((event, index) => {
                 return <EventType { ...event} key={index}/>
  })


    return (
        <div>
           {eventLists} 
        </div>
    );
}

export default Events;
