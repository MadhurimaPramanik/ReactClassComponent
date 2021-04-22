import React from 'react';
import './App.css';
import AnswerComponent from './AnswerComponent';
class QuestionComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedQuestion:''
        }
    }
    handleQuestion = (data) => {
        this.props.handleQuestion(data);
        
    }
    render() {

       

        return (<div className="main-container">
            <div className="question-wrapper">
            {this.props.desc.length > 0 && this.props.desc.map((data) => {
                return <div onClick={() => this.handleQuestion(data)} className="question-div">{data.desc}
                </div>
            })}
            </div>
            <div className="answer-section" > 
            <AnswerComponent data={this.props.selectedQuestion}/>
            </div>
        </div>);
    }
}
export default QuestionComponent;