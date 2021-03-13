import React from 'react';
import Events from './Events';
import EventForm from './EventForm';
import EventModel from '../models/Event'
import { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react';


const EventPage = (props) => {
const [events, setEvents] = useState([])
const [changed, setChanged] = useState(false)
    // put empty array to run once after initial render
    
    useEffect(()=> {
        const fetchData = async()=> {
            const res = await EventModel.all()
            console.log("here is res")
            console.log(res)
            setEvents(res.data)
        }
        fetchData()
    }, [])

    useEffect(()=> {
        const fetchData = async()=> {
            const res = await EventModel.all()
            console.log("here is res")
            console.log(res)
            setEvents(res.data)
        }
        fetchData()
    }, [changed])

const didUpdate =() =>{
    setChanged(!changed)
}




const listOfEvents = events.map((event, index) => {
    console.log(event)
    return (
        <Card key={index}>
            <Card.Content>
                <Card.Header>
                    {event.title}
                </Card.Header>
            </Card.Content>
        </Card>
    )
})



    return (
        <div>
              <EventForm eform={didUpdate} />
              <Card.Group>
              	{listOfEvents}
              </Card.Group>
        </div>
    );
}

export default EventPage;
