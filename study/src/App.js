import React from 'react';

const Head = props => <h1>{props.title}</h1>

function App() {
  return (
    <> 
      <Head title="This is Title" name="this is a name" />
      <Head title="This is Title" name="this is a name" />
    </>
  )
}

export default App;
