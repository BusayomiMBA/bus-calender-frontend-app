import React from 'react';
import { Link } from 'react-router-dom'
const UserCard = (props) => {
    return (
        <div>
           <p>{props.user.name}</p> 
           <Link to={`/eventPage/${props.user.name}`}>Event</Link>
        </div>
    );
}

export default UserCard;
