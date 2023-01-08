import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css'
import useFetch from './custom_hooks/useFetch'

const Country = ({ country: { name, flag, population } }) => (
  <div className='country'>
    <hr />
    <div className='country_flag'>
      <img src={flag} alt={name} style={{ width: 200 }} />
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

const App = () => {
  const url = 'https://restcountries.com/v2/regionalbloc/pa?fields=name,flag,population'
  const data = useFetch(url)

  return (
    <div className='App'>
      <h1>Fetching Data using Hook</h1>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
