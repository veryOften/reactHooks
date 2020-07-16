import React, { useEffect, useState } from "react";

const useNotification = (title, options) => {
  if(!("Notification" in window)){
    return;
  }

  const fireNotif = () => {
    if(Notification.permission !== 'granted'){
      Notification.requestPermission().then(permission => {
        if(permission === "granted"){
          new Notification(title, options);
        }else{
          return;
        }
      })
    }else{
      new Notification(title, options);
    }
  }

  return fireNotif;

};

  const App = () => {
   const triggerNotIf = useNotification('Can i steal your kimchi?',{ body:'I love kimchi' });
    
   return(
        <div className='App'>
            <button onClick={triggerNotIf}>Hello</button>
        </div>
    )
  }

  export default App;