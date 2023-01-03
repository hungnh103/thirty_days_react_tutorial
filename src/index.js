import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    const API_URL = 'https://restcountries.com/v2/regionalbloc/eu?fields=name,flag,capital,population,languages'

    axios.get(API_URL)
         .then((response) => {
           this.setState({ data: response.data })
         })
         .catch((error) => {
           console.log(error)
         })
  }

  renderCountries = () => {
    return this.state.data.map((country) => {
      const languageOrLanguages =
        country.languages.length > 1 ? 'Languages' : 'Language'
      const formatLanguages = country.languages.map(({ name }) => name).join(', ')

      return (
        <div key={country.name}>
          <div>
            <img src={country.flag} alt={country.name} />
          </div>

          <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>
              {languageOrLanguages}: {formatLanguages}
            </p>
            <p>Population: {country.population}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Fetching Data Using Axios</h1>
        <div>
          <p>There are {this.state.data.length} countries in the API</p>
          <div className='countries-wrapper'>{this.renderCountries()}</div>
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
