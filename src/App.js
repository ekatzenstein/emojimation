import React from 'react'

import Emojimation from 'components/Emojimation'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      emotion: 'joy',
      headColor: 'yellow'
    }
  }
  componentDidMount() {
    const _this = this;
    setTimeout(() => _this.setState({ emotion: 'anger', headColor: 'red' }), 2000);
  }
  render() {
    return (
      <div>
        <Emojimation emotion={this.state.emotion} headColor={this.state.headColor} duration={3000} />
      </div>
    )
  }
}

export default App
