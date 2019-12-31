import React from 'react';

const Loading = () => <div>Loading...</div>

class LoadingComponent extends React.Component {
  constructor() {
    super(props)
    this.state = {
      loading: false
    }
  }

  comment() {
    const con = 1
    const res = con > 0 ? true : false
    const and = loading && (<div>loading...</div>)
  }

  render() {
    const { loading } = this.state
    return (
      <>
        {
          loading && <Loading />
        }
      </>
    ) 
  }
}

export default App;
