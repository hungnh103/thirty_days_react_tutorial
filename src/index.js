import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'

const Country = ({ country: { name, flag, population } }) => {
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>

      <h3 className='country_name'>{name.toUpperCase()}</h3>

      <div className='country_population'>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
      </div>
    </div>
  )
}

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://restcountries.com/v2/regionalbloc/pa?fields=name,flag,population'

    try {
      const response = await axios.get(url)
      const data = await response.data
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the API</p>
        <div className='countries-wrapper'>
          {data.map((country) => (
            <Country key={Math.random()} country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
