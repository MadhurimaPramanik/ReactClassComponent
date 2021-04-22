import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';




function QuestionComponentFunc(props) {

   function handleQuestion  (data) {
       props.handleQuestion(data);
        
    }
  return (
    <div className="main-container">
      <div className="question-wrapper">
      {props.selectedDesc.length > 0 && props.selectedDesc.map((data) => {
      return <div onClick={() => handleQuestion(data)} className="question-div" >DESC: {data.desc}
</div>})}
</div>
      <div className="answer-section">{props.selectedQuestion}</div>
    </div>
  );
}

export default QuestionComponentFunc;
