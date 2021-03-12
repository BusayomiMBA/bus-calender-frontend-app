import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env;

class EventModel {
    static all = () => {
        let request = axios.get(`${REACT_APP_SERVER_URL}/events`)
        return request
    }
    static create = (event) => {
        // post request sending the todo object as the second argument
        let request = axios.post(`${REACT_APP_SERVER_URL}/events`, event)
        return request
    }
    static delete = (event) => {
        let request = axios.delete(`${REACT_APP_SERVER_URL}/events, ${event._id}`)
        return request
    }
    // methods to update delete etc.
}

export default EventModel;