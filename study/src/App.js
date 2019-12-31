import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count+1)}>Hooks is very Good!</button>{count}
      </header>
    </div>
  )
}

export default App;
