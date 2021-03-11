import React from 'react';
import UserCard from './UserCard';

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
