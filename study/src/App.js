import React from 'react';
import Timer from './State'

class Timer extends React.Component {
  constructor(props) {
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.tick()
  }

  tick() {
    this.setState({
      time: new Date()
    }, () => {
        console.log(this.state)
    })
  }

  render() {
    const { time } = this.state

    return (
      <div>
        {time.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default App;
