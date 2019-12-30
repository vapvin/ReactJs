import React from 'react';
import Hello from './Hello'


const data = [
  {
    title: 'Node',
    value: 0
  },
  {
    title: 'React',
    value: 1
  }
]

function App() {
  return (
    <div>
      <h1>{
          data.map(_ => (
            <>
              <p>{_.title}</p>
              <p>{_.value}</p>
            </>
          ))
        }</h1>
    </div>
  );
}

export default App;
