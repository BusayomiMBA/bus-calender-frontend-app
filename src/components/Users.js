import React from 'react';
import UserCard from './UserCard';
import { Link } from 'react-router-dom'
import Events from './Events'
import EventPage from './EventPage'

const usersArr = ["james", "Nicky", "yomi"]

const usersArrlist = usersArr.map((user, index) =>{
    return (
       <UserCard key={index} name={user} />
    )
  
})


const Users = () => {
    return (
        <div>
            {usersArrlist}
        </div>
    );
}

export default Users;
