import React from 'react';
import EventType from './EventType';
import EventModel from '../models/Event'
import { useState, useEffect } from 'react';
const { REACT_APP_SERVER_URL } = process.env;

const Events = (props) => {
    const [event, setEvent] = useState([])

useEffect(() => {
    
    const fetchEvents = async()=> {
           const res = await EventModel.all()
           // console.log(res)
           setEvent(res.data)
           console.log(event, 'Event in app.js from useEffect')
       }
       fetchEvents()
 
 }, []);

 




//   const eventLists = event.map((event, index) => {
//                  return <EventType { ...event} key={index}/>
//   })


    return (
        <div>
           {/* {eventLists}  */}
        </div>
    );
}

export default Events;
