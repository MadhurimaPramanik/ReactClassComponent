import React from 'react';
import LifeCycleChildComponent from './LifeCycleChildComponent';
import axios from 'axios';
import './App.css';
class LifeCycleMethods extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedCategory: '',
            userData: []
        }
        console.log("inside Constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("inside getDerivedStateFromProps", props, state);
        state.name ='xyz';
        return state;
        //  return null;
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log("res", res);
                this.setState({ userData: res.data });
            })
        console.log("inside componentDidMount method");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("inside shouldComponent Update method", nextProps, nextState);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("inside getSnapShotBeforeUpdate", prevProps, prevState);
        return null;
    }
    componentDidUpdate() {
        console.log("inside componentDidUpdate");
    }
    handleClick = () => {
        this.setState({ selectedCategory: 'xyz',userData:[]});
    }
    render() {
        console.log("inside render", this.state.userData);
        return (<div className="lifeCycle-container">
            <div className="header-section">
                <div className="title">Inside Parent Component</div>
                <button onClick={() => this.handleClick()}>Hide User List</button>
            </div>
            {this.state.userData.length > 0 ?
                (<div className="user-container">
                    {this.state.userData.map((user) => {
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

}
export default LifeCycleMethods;