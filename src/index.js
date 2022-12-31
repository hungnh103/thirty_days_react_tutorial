import React from 'react';
import ReactDOM from 'react-dom/client';

const Button = ({text, clickme}) => (
  <div>
    <button onClick={clickme}>
      {text}
    </button>
  </div>
)

const Loaded = () => (
  <span>data loaded successfully</span>
)

const Loading = () => (
  <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' alt='loading-icon' />
)

const NotLoad = () => (
  <span>please click button to load data</span>
)

class Main extends React.Component {
  render() {
    const current_state = this.props.loadDataStatus
    let content

    if(current_state === true) {
      content = <Loaded />
    } else if(current_state === 'loading') {
      content = <Loading />
      setTimeout(this.props.loaded, 2 * 1000)
    } else if(current_state === false) {
      content = <NotLoad />
    }

    return (
      <div style={{margin: 10}}>
        {content}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    data_loaded: false
  }

  fetchData = () => {
    this.setState({data_loaded: 'loading'})
  }

  fetchedData = () => {
    this.setState({data_loaded: true})
  }

  render() {
    return (
      <div className='app'>
        <Button clickme={this.fetchData} text='get data from server' />
        <Main loadDataStatus={this.state.data_loaded} loaded={this.fetchedData} />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
