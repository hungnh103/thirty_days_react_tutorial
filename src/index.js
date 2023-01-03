import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      day: 1,
      congratulate: null
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }

  doChallenge = () => {
    this.setState({ day: this.state.day + 1 })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.day === 30) {
      this.setState({ congratulate: 'chuc mung hoan thanh!' })
    }

    console.log(prevState, prevProps)
  }

  render() {
    return (
      <div>
        <h1>React Component Life Cycle</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
