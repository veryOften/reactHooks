import React, { useState } from 'react';

const useTabs = (initialTab, allTabs) => {

  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
 
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const content = [
  {
    tab:'Section 1',
    content:'Content 1'
  },
  {
    tab:'Section 2',
    content:'Content 2'
  },
  {
    tab:'Section 3',
    content:'Content 3'
  },
  {
    tab:'Section 4',
    content:'Content 4'
  },
]

  const App = () => {
    const {currentItem, changeItem} = useTabs(0 , content);
    return(
        <div className='App'>
            {content.map((section, index) => 
              <button onClick={() => changeItem(index)}>{section.tab}</button>
              )}
            <div>{currentItem.content}</div>
        </div>
    )
  }

  export default App;