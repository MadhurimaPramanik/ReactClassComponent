import React from 'react';
import '../App.css';
// import QuestionComponent from '../../QuestionComponent';
import defaultImage from '../img/default.jpg';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: '',
            selectedQuestion: ''
        }
        this.inputRef = React.createRef();
       
    }
    
    handleCategory = (name) => {
        this.inputRef.current.style.background="red";
        this.setState({
            selectedCategory: name,
            selectedQuestion: ''
        });
    }
    handleQuestion = (data) => {
        this.setState({ selectedQuestion: data.answer });
    }
    componentDidMount(){
        console.log(this.inputRef);
        //  this.inputRef.current.style.background="red";
    }
    render() {
        
        let categoryList = this.props.categoryData;
        const key = 'name';

        const uniqCategoryList = [...new Map(categoryList.map(item =>
            [item[key], item])).values()];

        let selectedDesc = categoryList.filter(category => category.name == this.state.selectedCategory);
     
        return (
        <div className="main-wrapper">
            <input type="text" ref= {this.inputRef} />
            <div className="Category-Wrapper">
                {uniqCategoryList.map((category) => {
                    return <div className="Category-Tab"  onClick={() => this.handleCategory(category.name)}>{category.name}</div>
                })}
            </div>
            {this.state.selectedCategory == '' ? (<div className="default-section">
                <img className="defaultImage" src={defaultImage} /></div>) : 'no data'
                // <QuestionComponent 
                // desc={selectedDesc} 
                // handleQuestion={this.handleQuestion} 
                // selectedQuestion={this.state.selectedQuestion} />
                }


        </div>);
    }
}
export default Home;