import React from 'react';

const Loading = () => <div>Loading...</div>

class Study extends React.Component {
  constructor() {
    super(props)
    this.state = {
      loading: false
    }
  }

  comment() {
    const con = 1
    const res = con > 0 ? true : false
  }

  render() {
    const { loading } = this.state
    if (loading) return <Loading />
    return
  }
}

export default App;
