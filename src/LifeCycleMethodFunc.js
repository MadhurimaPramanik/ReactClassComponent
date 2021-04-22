import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function LifeCycleMethodFunc() {
    const [userData, setuserData] = useState([]);
    useEffect(() => {
        console.log("inside useEffect");
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log("res", res)
                setuserData(res.data)
            })
    },[]);
    function handleClick(data) {
        setuserData([]);
    }
    return (
        <div className="lifeCycle-container">
            <div className="header-section">
                <div className="title">Inside Parent Component</div>
                <button onClick={() => handleClick()}>Hide User List</button>
            </div>
            {userData.length > 0 ?
                (<div className="user-container">
                    {userData.map((user) => {
                        return (<div className="user-details">
                            <div>Id: {user.id}</div>
                            <div>Name: {user.name}</div>
                            <div>Email: {user.email}</div>
                            <div>Address: {user.address.street}</div>

                        </div>)
                    })}
                </div>) : ''}
            {/* <LifeCycleChildComponent /> */}
        </div>)
}

export default LifeCycleMethodFunc;
