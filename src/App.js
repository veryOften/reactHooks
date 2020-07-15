import React from 'react';
import UseInput from './utilHooks/useInput/useInput'
import UseTab from './utilHooks/useTab/useTab'
import UseTitle from './utilHooks/useTitle/useTitle'
import UseClick from './utilHooks/useClick/useClick'
import UseConfirm from './utilHooks/useConfirm/useConfirm'
import UsePreventLeave from './utilHooks/usePreventLeave/usePreventLeave'
import UseBeforeLeave from './utilHooks/useBeforeLeave/useBeforeLeave'
import UseFadeIn from './utilHooks/useFadeIn/useFadeIn'

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
      <br/>
      <UseConfirm/>
      <br/>
      <UsePreventLeave/>
      <br/>
      <UseBeforeLeave/>
      <br/>
      <UseFadeIn/>
    </div>
  );
}

export default App;
