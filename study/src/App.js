import React from 'react';
import styled from 'styled-components';

const color = 'black'

const Component = styled.div`
  display: ${props => props.isLoaded ? 'block' : 'none'}
  color: ${color}
`

const Wrapper = styled(Component)`
  background: gray;
  margin: 20px;
`

const App = () => {
  return (
    <Wrapper isLoaded >
      <Component isLoaded >Complete</Component>
    </Wrapper>
  )
  
}

export default App;
