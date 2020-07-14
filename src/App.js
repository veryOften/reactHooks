import React from 'react';
import UseInput from './utilHooks/useInput/useInput'
import UseTab from './utilHooks/useTab/useTab'
import UseTitle from './utilHooks/useTitle/useTitle'
import UseClick from './utilHooks/useClick/useClick'

function App() {
  return (
    <div className="App">
      <UseInput/>
      <br/>
      <UseTab/>
      <br/>
      <UseTitle/>
      <br/>
      <UseClick/>
    </div>
  );
}

export default App;
