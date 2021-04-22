
import React, { useState,useContext} from 'react';
import { contextVar } from './AppWithContext';

function TestContext(props) {
    const contextDesc = useContext(contextVar);

  return (
      <div>test {contextDesc} </div>
  )
}

export default TestContext;
