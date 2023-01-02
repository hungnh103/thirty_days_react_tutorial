import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component {
  state = {
    x: '',
    y: ''
  }

  getMouseLocation = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return (
      <div className='app' onMouseMove={this.getMouseLocation}>
        <p>x coord: {this.state.x}</p>
        <p>y coord: {this.state.y}</p>
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
