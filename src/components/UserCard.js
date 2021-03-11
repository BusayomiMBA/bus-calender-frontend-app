import React from 'react';
import { Link } from 'react-router-dom'
const UserCard = (props) => {
    return (
        <div>
           <p>{props.name}</p> 
            <Link to='/eventPage'>Event</Link>
        </div>
    );
}

export default UserCard;
