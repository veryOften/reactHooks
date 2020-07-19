import React, { useEffect, useState } from "react";
import defaultAxios from 'axios';
const useAxios = (opts, axiosInstance = defaultAxios ) => {

  const [state, setState] = useState({
    loading:true,
    error:null,
    data:null,
  });

  const [trigger, setTrigger] =  useState(0);

  useEffect(()=>{
    axiosInstance(opts)
    .then(data => {
      setState({
        ...state,
        loading:false,
        data
      })
    })
    .catch(error => {
      setState({
        ...state,
        loading:false,
        error,
      })
    })
  },[trigger]);

  if(!opts.url){
    return;
  }

  const refetch = () => {
    setState({
      ...state,
      loading:true,
    });

    setTrigger(Date.now());
  }

  return {...state, refetch };
 

};

  const App = () => {
    const { loading, data, error, refetch } = useAxios({
      url:"https://yts.am/api/v2/list_movies.json",
      withCredentials:true,
    });
    console.log( loading, data, error);
    return(
        <div className='App' style={{height: '50vh'}}>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refecth</button>
        </div>
    )
  }

  export default App;