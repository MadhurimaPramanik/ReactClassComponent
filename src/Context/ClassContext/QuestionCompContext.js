import React from 'react';
import '../../App.css';
import AnswerCompContext from './AnswerCompContext';
class QuestionCompContext extends React.Component {
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
            <AnswerCompContext/>
            </div>
        </div>);
    }
}
export default QuestionCompContext;