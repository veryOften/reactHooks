import React, { useEffect, useState, useRef } from "react";

const useClick = onclick => {

  const element = useRef();

  useEffect(()=>{
    if(element.current){
      element.current.addEventListener('click' , onclick);
    }

    return () =>  {
      if(element.current){
      element.current.removeEventListener('click' , onclick);
      }
    };
  },[]);
 
  if(typeof onclick !== 'function'){
    return;
  }

  return element;
};

  const App = () => {

  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);

    return(
        <div className='App'>
            <button ref={title}>Hi</button>
        </div>
    )
  }

  export default App;