import React from 'react';
import Events from './Events';
import EventForm from './EventForm';
import EventFormUpdate from './EventFormUpdate';
import EventModel from '../models/Event'
import { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react';
 import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import {Redirect} from 'react-router-dom';

import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

const EventPage = (props) => {
    const [events, setEvents] = useState([])
    const [changed, setChanged] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    // put empty array to run once after initial render
    const [modal, setModal] = useState(false)
     const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [comment, setComment] = useState('')
    const [id, setId] = useState('')
    const [deleteModal, setDeleteModal] = useState(false)

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
  
  
  
    const onFormSubmit = (e) => {
      e.preventDefault()
  
      const eventData = { title, time, comment }
        console.log(eventData)



      axios.put("http://localhost:8000/api/events/"+id, eventData)
        .then(response => {
          const result = response.data;
          console.log(result)
         setModal(false)
         didUpdate() 
        //  props.history.push('/eventPage')
        })
        .catch(error => {
          console.log('===> Error in eventform', error);
        });
  
    }






    useEffect(() => {
        const fetchData = async () => {
            const res = await EventModel.all()
            console.log("here is res")
            console.log(res)
            setEvents(res.data)
        }
        fetchData()
    }, [])

   
    useEffect(() => {
        const fetchData = async () => {
            const res = await EventModel.all()
            console.log("here is res")
            console.log(res)
            setEvents(res.data)
        }
        fetchData()
    }, [changed])

    const didUpdate = () => {
        setChanged(!changed)
    }



    const changedForm =(event)=>{
        setIsClicked(true)
        console.log(event)
     }


     const handleModal = (currentId) =>{
         setModal(true)
         setDeleteModal(false)
         setId(currentId)
     }

     const handleDelete = (currentId) =>{
        setDeleteModal(true)
        setModal(false)
        setId(currentId)

        axios.delete("http://localhost:8000/api/events/"+id)
        .then(response => {
          const result = response.data;
          console.log(result)
         setModal(false)
         didUpdate() 
        //  props.history.push('/eventPage')
        })
        .catch(error => {
          console.log('===> Error in eventform', error);
        });
    
    }
     
// let currentForm = isClicked ?  <EventFormUpdate /> :  <EventForm eform={didUpdate}/>

const listOfEvents = events.map((event, index) => {
        console.log(event)
        return (
            <Card key={index}>
                <Card.Content>
                    <Card.Header>
                        {event.title}
                    </Card.Header>
                    {/* {currentForm} */}
                {/* <button onClick={() => changedForm(event)}>Edit</button> */}
                <button onClick={()=> handleModal(event._id)}>Edit</button>
                <button onClick={()=> handleDelete(event._id)}>Delete</button>
                </Card.Content>
            </Card>
        )
    })




    //  return (
    //     <div>
           
    //         <Card.Group>
    //             {listOfEvents}
    //         </Card.Group>
    //     </div>
    // );
    return (
        <div>
          <div>  <EventForm eform={didUpdate} />
                <Card.Group>
               {listOfEvents}
          </Card.Group></div>

         <div><Modal show={modal}><Modal.Body><form onSubmit={onFormSubmit}>
        
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
      <button type="submit" id="updateEvent" className='btn'>Update Event</button>
</form></Modal.Body></Modal>
            </div>

        </div>
    );
}




// import React from 'react';
// import Events from './Events';
// import EventForm from './EventForm';

// import EventModel from '../models/Event'
// import { useState, useEffect } from 'react'
// import { Card } from 'semantic-ui-react';


// const EventPage = (props) => {
//     const [events, setEvents] = useState([])
//     const [changed, setChanged] = useState(false)
//     // put empty array to run once after initial render
    
//     useEffect(()=> {
//         const fetchData = async()=> {
//             const res = await EventModel.all()
//             console.log("here is res")
//             console.log(res)
//             setEvents(res.data)
//         }
//         fetchData()
//     }, [])
    
//     useEffect(()=> {
//         const fetchData = async()=> {
//             const res = await EventModel.all()
//             console.log("here is res")
//             console.log(res)
//             setEvents(res.data)
//         }
//         fetchData()
//     }, [changed])
    
//     const didUpdate =() =>{
//         setChanged(!changed)
//     }
    
    
    
    
//     const listOfEvents = events.map((event, index) => {
//         console.log(event)
//         return (
//             <Card key={index}>
//             <Card.Content>
//                 <Card.Header>
//                     {event.title}
//                 </Card.Header>
//             </Card.Content>
//         </Card>
//     )
// })



// return (
//     <div>
//               {/* <EventForm /> */}
//               <EventForm eform={didUpdate} />
//               <Card.Group>
//               	{listOfEvents}
//               </Card.Group>
//         </div>
//     );
// }

export default EventPage;