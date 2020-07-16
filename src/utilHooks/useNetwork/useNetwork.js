import React, {
  useEffect,
  useState
} from "react";

const useNetwork = onchange => {

  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if(typeof onchange ==='function'){
      onchange(navigator.onLine);
    }
    setStatus(navigator.onLine)
  }

  useEffect(()=>{
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () =>{
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    }
  },[]);

  return status;
};

const App = () => {
  const handleNetworkChange = ( online ) => console.log( online ? 'We just went online': 'We are offline');

  const online = useNetwork(handleNetworkChange);
  return ( 
  <div className = 'App' >
          <h1>{online ? 'Online' : 'Offline'}</h1>
    </div>
  )
}

export default App;