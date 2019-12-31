import React from 'react';

class Bro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'Assembly',
      date: new Date()
    }
  }

  render() {
    const { lang, date } = this.state
    return (
    <div>
      {
        lang
      }
    </div>
    )
  }
  
}

export default App;
