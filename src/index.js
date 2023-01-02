import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component {
  state = {
    top: 0,
    left: 0
  }

  moveObject = () => {
    this.setState({
      top: Math.floor(Math.random() * 501),
      left: Math.floor(Math.random() * 901)
    })
  }

  render() {
    const contentStyle = {
      top: this.state.top,
      left: this.state.left
    }

    return (
      <div className='app'>
        <div
          className='content'
          onMouseEnter={this.moveObject}
          style={contentStyle}
        >
          30 Days Of React
        </div>
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
