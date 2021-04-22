import React from 'react';
import '../../App.css';
import { contextVar } from './HomeContext';
class AnswerCompContext extends React.Component {
   
    
    render() {

       

        return (<div>
            <contextVar.Consumer>
                {answer =>{
                    return <div className="answer-section" >{answer}</div>
                }}
            </contextVar.Consumer>
           
        </div>);
    }
}
export default AnswerCompContext;