// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
<<<<<<< HEAD
// CSS
import './App.css';
=======




>>>>>>> f13e3975069b410e9ce88e72ee58ead7b975d5c1
// Components
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
<<<<<<< HEAD
import UsersPage from './components/UsersPage';
import EventPage from './components/EventPage';
import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;
=======

import axios from 'axios';

import UsersPage from './components/UsersPage';
import EventPage from './components/EventPage';

>>>>>>> f13e3975069b410e9ce88e72ee58ead7b975d5c1

const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }} />
}
function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState('')
  const [event, setEvent] = useState('')

  useEffect(() => {
    let token;
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
<<<<<<< HEAD
    //AXIOS
    axios.get(`${REACT_APP_SERVER_URL}/users`)
    .then(response => {
      const userList = response.data;
      console.log(result)
      setAuthToken(userList);
    })
    
    axios.get(`${REACT_APP_SERVER_URL}/events`)
    .then(response => {
      const result = response.data;
      console.log(result)
    })

=======

    //AXIOS

  }, []);
>>>>>>> f13e3975069b410e9ce88e72ee58ead7b975d5c1

    .catch(error => {
      console.log('===> Error in app.js', error);
    });


  }, []);
  const nowCurrentUser = (userData) => {
    console.log('===> nowCurrent is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }
  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }
  return (
    <div className="App">
      <h1>MyCalender App</h1>
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
          />
          <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
          <PrivateRoute path="/usersPage" component={UsersPage} user={currentUser} handleLogout={handleLogout} />
          <PrivateRoute path="/eventPage" component={EventPage} user={currentUser} handleLogout={handleLogout} />
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
<<<<<<< HEAD
=======




>>>>>>> f13e3975069b410e9ce88e72ee58ead7b975d5c1
export default App;