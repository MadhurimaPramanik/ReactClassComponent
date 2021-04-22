import React from 'react';
import './App.css';
class AnswerComponent extends React.Component {
   
    
    render() {

       

        return (<div>
            
            <div className="answer-section" > {this.props.data}</div>
        </div>);
    }
}
export default AnswerComponent;