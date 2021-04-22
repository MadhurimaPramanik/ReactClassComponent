import React from 'react';
import '../../App.css';
import QuestionCompContext from './QuestionCompContext';
import defaultImage from '../../img/default.jpg';
export const contextVar = React.createContext();
class HomeContext extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedCategory: '',
            selectedQuestion: ''
        }
       
    }
    
    handleCategory = (name) => {
        this.setState({
            selectedCategory: name,
            answer: ''
        });
    }
    handleQuestion = (data) => {
        this.setState({ answer: data.answer });
    }
    render() {
        
        let categoryList = this.props.categoryData;
        const key = 'name';

        const uniqCategoryList = [...new Map(categoryList.map(item =>
            [item[key], item])).values()];

        let selectedDesc = categoryList.filter(category => category.name == this.state.selectedCategory);

        return (
        <div className="main-wrapper">
            <div className="Category-Wrapper">
                {uniqCategoryList.map((category) => {
                    return <div className="Category-Tab" onClick={() => this.handleCategory(category.name)}>{category.name}</div>
                })}
            </div>
            {this.state.selectedCategory == '' ? (<div className="default-section">
                <img className="defaultImage" src={defaultImage} /></div>) :
                <contextVar.Provider value={this.state.answer}>
                 <QuestionCompContext desc={selectedDesc} handleQuestion={this.handleQuestion}  />
                 </contextVar.Provider>}


        </div>);
    }
}
export default HomeContext;