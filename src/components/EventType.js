import React from 'react';

const EventType = (props) => {
    return (
        <div>
         <div>{props.title}</div>  
          <div>{props.time}</div> 
        </div>
    );
}

export default EventType;
