import React from 'react';
import { useState } from 'react';
import Events from './Events'

const EventForm = (props) => {


  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [comment, setComment] = useState('')


  const handleTitle= (e) => {
    // the value yes event.target.value
    setTitle(e.target.value)
  }
  const handleTime = (e) => {
    // the value yes event.target.value
    setTime(e.target.value)
  }
  const handleComment= (e) => {
    // the value yes event.target.value
    setComment(e.target.value)
  }

  

  const onFormSubmit = (e) => {
    e.preventDefault()
    // body: e.target.value
    // completed: false
    //call a function that is passed down as props
    // props.createEvent(event)
    // setEvent('')
  }



  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={handleTitle}
          type="title"
          id="title"
          name="title" //This is req.body.title
          placeholder="New event here"
          value={props.title}
        />
        <input
          onChange={handleTime}
          type="time"
          id="time"
          name="time" //This is req.body.time
          placeholder="time here"
          value={props.time}
        />
        <input
          onChange={handleComment}
          type="comment"
          id="comment"
          name="comment" //This is req.body.comment
          placeholder="comment here"
          value={props.comment}
        />
        <button type="submit" id="addTask" className='btn'>Submit</button>
      </form>

    </div>
  );
}

export default EventForm;
