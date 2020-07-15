import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if(!onConfirm && typeof onConfirm !== 'function'){
    return;
  }
  if(!onCancel && typeof onCancel !== 'function'){
    return;
  }

  const confirmAction = () => {
    if(window.confirm(message)){
      onConfirm();
    }else{
      onCancel();
    }
  }
  
  return confirmAction;
};

  const App = () => {

    const deleteWorld = () => console.log('Delete the world');
    const abort = () => console.log('Aborted');
    const confirmDelete = useConfirm('Are you sure?', deleteWorld , abort);
    return(
        <div className='App'>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
  }

  export default App;