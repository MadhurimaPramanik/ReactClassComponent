import '../../App.css';
import React, { useState,useContext } from 'react';
import {contextVar} from './AppWithContext';
function QuestionCompFnWithContext(props) {

   function handleQuestion  (data) {
       props.handleQuestion(data);
        
    }
    const contextDesc = useContext(contextVar);
  return (
    <div className="main-container">
      <div className="question-wrapper">
      {props.selectedDesc.length > 0 && props.selectedDesc.map((data) => {
      return <div onClick={() => handleQuestion(data)} className="question-div" >DESC: {data.desc}
</div>})}
</div>
      <div className="answer-section">{contextDesc}</div>
    </div>
  );
}

export default QuestionCompFnWithContext;
