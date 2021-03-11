import React, { useState } from 'react';
import Calender from "react-calendar";

const Calender = () => {
    const [date, setDate]= useState(new Date());

    const onChange = date => {
        setDate(date);

    };

    return (
        <div className="calender">
            
            <Calender onChange={onChange} value ={date} />
           
        </div>
    );


}
export default Calender