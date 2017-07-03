import React, { Component } from 'react'
import { render } from 'react-dom'

import Emojimation from '../../src'

class Demo extends Component {
  state = { emotion: 'joy', headColor: 'yellow' }

  handleToggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  render() {
    return <div>
      <Emojimation emotion={this.state.emotion} headColor={this.state.headColor} />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))