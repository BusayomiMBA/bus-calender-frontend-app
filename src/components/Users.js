import React from 'react';
import UserCard from './UserCard';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;


const Users = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
         const userData = { email, password };

        axios.post(`${REACT_APP_SERVER_URL}/users/login`, userData)
            .then(response => {
                const { token } = response.data;
                // save token to localStorage
                localStorage.setItem('jwtToken', token);
                // set token to headers
                setAuthToken(token);
                // decode token to get the user data
                const decoded = jwt_decode(token);
                // set the current user
                props.nowCurrentUser(decoded); // funnction passed down as props.
            })
            .catch(error => {
                console.log('===> Error on login', error);
                alert('Either email or password is incorrect. Please try again');
            });
    }


    // const usersArrlist = usersArr.map((user, index) => {
    //     return (
    //         <UserCard key={index} name={user} />
    //     )

    // })


    return (
        <div>
            {/* {usersArrlist} */}
        </div>
    );
}

export default Users;
