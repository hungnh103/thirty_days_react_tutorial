import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const Country = ({
  country: { name, capital, flag, languages, population, currency }
}) => {
  const formatedCapital =
    capital.length > 0 ? (
      <>
        <span>Capital: </span>
        {capital}
      </>
    ) : (
      ''
    )

  const formatLanguage = languages.length > 1 ? `Languages` : `Language`

  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>

      <h3 className='country_name'>{name.toUpperCase()}</h3>

      <div className='country_text'>
        <p>{formatedCapital}</p>

        <p>
          <span>{formatLanguage}: </span>
          {languages.map((language) => language.name).join(', ')}
        </p>

        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>

        <p>
          <span>Currency: </span>
          {currency}
        </p>
      </div>
    </div>
  )
}
class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchCountryData()

    // const url = 'https://restcountries.com/v2/regionalbloc/al?fields=name,capital,flag,languages,population,currencies'

    // fetch(url)
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((data) =>{
    //     console.log(data)
    //     this.setState({ data })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  fetchCountryData = async () => {
    const url = 'https://restcountries.com/v2/regionalbloc/al?fields=name,capital,flag,languages,population,currencies'

    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the API</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (
              <Country key={Math.random()} country={country} />
            ))}
          </div>
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
