import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component {
  state = {
    message: '',
    value: '',
  }

  handleClick = () => {
    this.setState({
      message: 'Welcome to the world of events'
    })
  }

  handleMouseMove = () => {
    this.setState({
      message: 'mouse is moving'
    })
  }

  handleCopy = () => {
    this.setState({
      message: 'using 30 days of react for commercial purpose is not allowed'
    })
  }

  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is ${e.charCode}`
    })
  }

  handleBlur = () => {
    this.setState({
      message: 'Input field has been blurred'
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({message: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={this.handleClick}>Click Me</button>
        <br />
        <br />
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
          Check copyright permission by copying this text
        </p>

        <label htmlFor="">Test for onKeyPress Event:</label>
        <input type="text" onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor="">Test for onBlur Event:</label>
        <input type="text" onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange}
              id='firstName'
            />
          </div>

          <div>
            <input type="submit" value='Submit' />
          </div>
        </form>

        <p>{this.state.message}</p>
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
