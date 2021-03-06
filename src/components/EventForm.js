import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import EventModel from '../models/Event'
import { useHistory } from 'react-router-dom'
const { REACT_APP_SERVER_URL } = process.env;

const EventForm = (props) => {


  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [comment, setComment] = useState('')
   let history = useHistory();


  const handleTitle = (e) => {
    // the value yes event.target.value
    setTitle(e.target.value)
  }

  const handleTime = (e) => {
    // the value yes event.target.value
    setTime(e.target.value)
  }
  const handleComment = (e) => {
    // the value yes event.target.value
    setComment(e.target.value)
  }



  const onFormSubmit = async (e) => {
     e.preventDefault()
console.log(props)
    const eventData = { title, time, comment }

     await axios.post(`${REACT_APP_SERVER_URL}/events`, eventData)
      .then(response => {
        const result = response.data;
        console.log(result)
        props.eform()
       history.push("/eventPage")
      })
      .catch(error => {
        console.log('===> Error in eventform', error);
      });

  }

 

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        
          <label htmlFor="title">Title</label>
          <input
            onChange={handleTitle}
            type="title"
            id="title"
            name="title" //This is req.body.title
            placeholder="New event here"
            value={props.title}
          />
          <label htmlFor="time">Time</label>
          <input
            onChange={handleTime}
            type="time"
            id="time"
            name="time" //This is req.body.time
            placeholder="time here"
            value={props.time}
          />
          <label htmlFor="comment">Comment</label>
          <input
            onChange={handleComment}
            type="comment"
            id="comment"
            name="comment" //This is req.body.comment
            placeholder="comment here"
            value={props.comment}
          />
          <button type="submit" id="addTask">Add Event</button>
          {/* <button type="submit" id="addTask" className='btn'>Add Event</button> */}
</form>
    </div>
  );
}

export default EventForm;
