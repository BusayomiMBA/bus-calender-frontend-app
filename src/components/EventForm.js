import React from 'react';
import { useState } from 'react';
import Events from './Events'

const EventForm = (props) => {
    
    const [event, setEvent] = useState([])

   
    const onInputChange = (e)=> {
        // the value yes event.target.value
        setEvent(e.target.value)
    }

    console.log(event)

    const onFormSubmit = (e)=> {
        e.preventDefault()
        // body: e.target.value
        // completed: false
        //call a function that is passed down as props
        // props.createEvent(event)
        // setEvent('')
    }

    
    
    return (
        <div>
            <form onSubmit={ onFormSubmit }>
                <input 
                  onChange={ onInputChange }
                  type="title" id="title"
                  placeholder="New event here"
                  value={props.title}
                />
                <input 
                  onChange={ onInputChange }
                  type="time" id="time"
                  placeholder="time here"
                  value={props.time}
                />
                <input 
                  onChange={ onInputChange }
                  type="comment" id="comment"
                  placeholder="commet here"
                  value={props.comment}
                />
                <button type="submit" id="addTask" className='btn'>Submit</button>
            </form>
        </div>
    );
}

export default EventForm;
