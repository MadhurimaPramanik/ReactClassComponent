import '../../App.css';
import React, { useState,useEffect } from 'react';
import QuestionCompFnWithContext from './QuestionCompFnWithContext';
import TestContext from './TestContext';
import defaultImage from '../../img/default.jpg';

export const contextVar = React.createContext();

function AppWithContext(props) {
  const categoryList = props.categoryData;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  let selectedDesc = categoryList.filter(category => category.name == selectedCategory);
  
  function handleCategory (name) {
    console.log("inside handleCategory",name);
    setSelectedCategory(name);
    setSelectedQuestion('');
  }
  function handleQuestion (data)  {
    setSelectedQuestion(data.answer );
 
}
const key = 'name';

const uniqCategoryList = [...new Map(categoryList.map(item =>
    [item[key], item])).values()];
    console.log("selectedCategory",selectedCategory);
  return (
    <div className="main-wrapper">
      <div className="Category-Wrapper">
        {uniqCategoryList.map((category) => {
          return <div className="Category-Tab" onClick={() => handleCategory(category.name)}>{category.name}</div>
        })}
      </div>
      {selectedCategory == '' ? (<div className="default-section">
                <img className="defaultImage" src={defaultImage} /></div>) : 
                 <contextVar.Provider value={selectedQuestion}>
                <QuestionCompFnWithContext selectedDesc={selectedDesc} handleQuestion={handleQuestion} />
                <TestContext/>
                </contextVar.Provider>}


      
    </div>
  );
}

export default AppWithContext;
