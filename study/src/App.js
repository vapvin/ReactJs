import React from 'react';
import styled from 'styled-components';

const color = 'black'

const Component = styled.div`
  display: ${props => props.isLoaded ? 'block' : 'none'}
  color: ${color}
`

const App = () => {
  return (
    <Component isLoaded >Complete</Component>
  )
  
}

export default App;
