// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import EventModel from '../models/Event'
// const { REACT_APP_SERVER_URL } = process.env;

// const EventFormUpdate = (props) => {


//   const [title, setTitle] = useState('')
//   const [time, setTime] = useState('')
//   const [comment, setComment] = useState('')


//   const handleTitle = (e) => {
//     // the value yes event.target.value
//     setTitle(e.target.value)
//   }

//   const handleTime = (e) => {
//     // the value yes event.target.value
//     setTime(e.target.value)
//   }
//   const handleComment = (e) => {
//     // the value yes event.target.value
//     setComment(e.target.value)
//   }



//   const onFormSubmit = (e) => {
//     e.preventDefault()

//     const eventData = { title, time, comment }

//     axios.put(`${REACT_APP_SERVER_URL}/events`, eventData)
//       .then(response => {
//         const result = response.data;
//         console.log(result)
//       })
//       .catch(error => {
//         console.log('===> Error in eventform', error);
//       });

//   }

//  const defaultForm = (
//     <div>
//       <form onSubmit={onFormSubmit}>
        
//           <label htmlFor="title">Title</label>
//           <input
//             onChange={handleTitle}
//             type="title"
//             id="title"
//             name="title" //This is req.body.title
//             placeholder="New event here"
//             value={props.title}
//           />
//           <label htmlFor="time">Time</label>
//           <input
//             onChange={handleTime}
//             type="time"
//             id="time"
//             name="time" //This is req.body.time
//             placeholder="time here"
//             value={props.time}
//           />
//           <label htmlFor="comment">Comment</label>
//           <input
//             onChange={handleComment}
//             type="comment"
//             id="comment"
//             name="comment" //This is req.body.comment
//             placeholder="comment here"
//             value={props.comment}
//           />
//           <button type="submit" id="updateEvent" className='btn'>Update Event</button>
// </form>
//     </div>
//   );
// }

// export default EventFormUpdate;
