import '../App.css';
import React, { useState,useEffect,useRef } from 'react';
// import QuestionComponentFunc from './QuestionComponentFunc';
import defaultImage from '../img/default.jpg';

function AppWithRef(props) {
  const inputRef= useRef(null);
  const categoryList = props.categoryData;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  let selectedDesc = categoryList.filter(category => category.name == selectedCategory);
  useEffect(()=>{
    inputRef.current.style.background = 'grey';
  },[]);
  function handleCategory (name) {
    inputRef.current.style.background = 'lightgrey';
    setSelectedCategory(name);
    setSelectedQuestion('');
  }
  function handleQuestion (data)  {
    setSelectedQuestion(data.answer );
 
}
const key = 'name';

const uniqCategoryList = [...new Map(categoryList.map(item =>
    [item[key], item])).values()];
  return (
    <div className="main-wrapper">
      <input type="text" ref={inputRef} />
      <div className="Category-Wrapper">
        {uniqCategoryList.map((category) => {
          return <div className="Category-Tab" onClick={() => handleCategory(category.name)}>{category.name}</div>
        })}
      </div>
      {selectedCategory == '' ? (<div className="default-section">
                <img className="defaultImage" src={defaultImage} /></div>) : 'No Data'
                //  <QuestionComponentFunc selectedDesc={selectedDesc} handleQuestion={handleQuestion} selectedQuestion={selectedQuestion}/>
                 }


      
    </div>
  );
}

export default AppWithRef;
