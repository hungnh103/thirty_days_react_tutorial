import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'John',
      data: []
    }
  }

  renderCountries = () => {
    return this.state.data.map((country) => {
      return (
        <div
          key={country.name}
          style={{float: 'left', margin: 20, height: 400}}
        >
          <div>
            <img
              src={country.flag}
              alt={country.name}
              style={{width: 200}}
            />
          </div>
          <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the API</p>
          <div className='countries-wrapper'>
            {this.renderCountries()}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const API_URL = 'https://restcountries.com/v2/regionalbloc/eu?fields=name,flag,capital,population'

    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
