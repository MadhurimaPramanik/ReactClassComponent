import React from 'react';
class LifeCycleChildComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedCategory: ''
        }
        console.log("inside child Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("inside child getDerivedStateFromProps");
        return null;
    }
     componentDidMount(){
         console.log("inside child componentDidMount method");
     }
    render() {
        console.log("inside child render");
        return(<div>Inside Child Component</div>)
    }

}
export default LifeCycleChildComponent;