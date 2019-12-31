import React from 'react';

function App() {

  const handleClick = (par) => {
    console.log(`${par} is clicked`)
  }
  
  return (

      <button onClick={() => handleClick('test')}>This is a button</button>

  )
}


export default App;
