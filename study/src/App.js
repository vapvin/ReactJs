import React,  from 'react';

const Head = props => <h1>{props.title}</h1>

function App() {

  const iter = [0,1,2]
  return (
    <div>
      {
        iter.map(item => <h1 key={item}>item</h1>)
      }
    </div>
  )
}

export default App;
