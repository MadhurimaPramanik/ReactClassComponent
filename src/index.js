import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';

import reportWebVitals from './reportWebVitals';
import categoryList from './Data/category.json';
import LifeCycleMethods from './LifeCycleMethods';
import LifeCycleMethodFunc from './LifeCycleMethodFunc';
import HomeContext from './Context/ClassContext/HomeContext';
import AppContext from './Context/FuncContext/AppWithContext';
import HomeRef from './Ref/HomeRef';
import AppFuncRef from './Ref/AppWithRef';


ReactDOM.render(
  <React.StrictMode>
    {/* <App categoryData={categoryList}/> */}
    {/* <Home categoryData={categoryList}/> */}
    {/* <LifeCycleMethods /> */}
    {/* <LifeCycleMethodFunc/> */}
 
    {/* <HomeContext categoryData={categoryList} /> */}
    {/* <AppContext categoryData={categoryList} /> */}
    {/* <HomeRef categoryData={categoryList}/> */} 
    <AppFuncRef categoryData={categoryList}/>
    
  

  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
