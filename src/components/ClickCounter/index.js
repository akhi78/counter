import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  Increament = () => {
    this.setState(prevState => {
      console.log('jr')
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="count">{count}</span> times
        </h1>
        <p className="instruction">Click the button to increase the count!</p>
        <div>
          <button type="button" className="btn" onClick={this.Increament}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
