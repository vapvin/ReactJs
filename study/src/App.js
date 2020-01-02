import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  display: ${props => props.isLoaded ? 'block' : 'none'}
`

const App = () => {
  return (
    <Component isLoaded >Complete</Component>
  )
  
}

export default App;
