import { Component } from 'react'
import axios from 'axios'

const Content = ({ countBreeds, avgWeight, avgLifeSpan, stat }) => {
  return (
    <>
      <p>Cats Paradise</p>
      <p>There are {countBreeds} cat breeds</p>
      <p>On average, a cat can weight about {avgWeight} kg and live {avgLifeSpan} years</p>

      <h3>Stat by countries</h3>
      <p>Number of countries which have cat breed: {Object.keys(stat).length}</p>
      <p>
        Country has the highest number of cat breeds: {stat[stat.length - 1][0]} ({stat[stat.length - 1][1]} breeds)
      </p>
      <ol>
        {
          stat.map(([key, value]) => {
            return <li key={key}>{key}: {value}</li>
          })
        }
      </ol>
    </>
  )
}

class App extends Component {
  state = {
    fetched: false,
    data: [],
    numberOfBreeds: 0
  }

  componentDidMount = () => {
    const url = 'https://api.thecatapi.com/v1/breeds'

    axios
      .get(url)
      .then((response) => {
        const data = response.data

        this.setState({
          fetched: true,
          data,
          numberOfBreeds: data.length,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  countBreeds = () => {
    return this.state.numberOfBreeds
  }

  avgWeight = () => {
    return (this.state.data.map((cat) => {
      return cat.weight.metric.split(' - ').reduce((sum, e) => sum + Number(e), 0) / 2
    }).reduce((sum, e) => sum + e, 0) / this.state.numberOfBreeds).toFixed(2)
  }

  avgLifeSpan = () => {
    return (this.state.data.map((cat) => {
      return cat.life_span.split(' - ').reduce((sum, e) => sum + Number(e), 0) / 2
    }).reduce((sum, e) => sum + e, 0) / this.state.numberOfBreeds).toFixed(2)
  }

  getStatByCountries = () => {
    let stat = {}

    this.state.data.map((cat) => cat.origin).forEach((country) => {
      stat[country] = (stat[country] || 0) + 1
    })

    return Object.entries(stat).sort((a, b) => a[1] - b[1])
  }

  render() {
    return (
      <div className='app'>
        <h1>30 Days Of React</h1>
        {
          this.state.fetched &&
          <Content
            countBreeds={this.countBreeds()}
            avgWeight={this.avgWeight()}
            avgLifeSpan={this.avgLifeSpan()}
            stat={this.getStatByCountries()}
          />
        }
      </div>
    )
  }
}

export default App
