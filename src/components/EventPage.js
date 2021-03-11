import React from 'react';
import Events from './Events';
const EventPage = (props) => {
    return (
        <div>
              <Events title={props.title} time={props.time} comment={props.comment}/>
        </div>
    );
}

export default EventPage;
