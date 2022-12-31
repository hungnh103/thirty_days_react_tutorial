import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  state = {
    backgroundImg: null
  }

  render() {
    const season = this.state.backgroundImg ? this.state.backgroundImg : prompt('which season?')
    switch(season) {
    case 'spring':
      this.setState({backgroundImg: 'https://www.vietnam-visa.com/wp-content/uploads/2017/12/spring-in-vietnam-hanoi-compressor.jpg'})
      break
    case 'summer':
      this.setState({backgroundImg: 'https://hips.hearstapps.com/hmg-prod/images/when-does-summer-end-1651614198.jpg?crop=0.656xw:1.00xh;0.173xw,0&resize=480:*'})
      break
    case 'autumn':
      this.setState({backgroundImg: 'https://cdn.britannica.com/88/137188-050-8C779D64/Boston-Public-Garden.jpg'})
      break
    case 'winter':
      this.setState({backgroundImg: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/trees-on-snow-covered-landscape-in-heavy-snow-day-royalty-free-image-1634585533.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*'})
      break
    default:
      break
    }

    return (
      <div className='app'>
        <div
          className='illustration'
          style={{
            background: `url(${this.state.backgroundImg})`,
            width: '200px',
            height: '200px'
          }}
        >
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
