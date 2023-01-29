import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { getPopulationStat, getLanguagesStat } from './lib/calculateStats'

// import dummyData from './dummyData'

const App = () => {
  const [metaData, setMetaData] = useState({ totalCountries: 0, worldPopulation: 0 })
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [stats, setStats] = useState({ population: [], languages: [] })
  const [filterResultCount, setFilterResultCount] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://restcountries.com/v2/all?fields=flags,name,capital,languages,population,currencies'

      try {
        const response = await axios.get(url)
        const data = await response.data
        // const data = dummyData

        const totalPopulation = data.reduce(
          (total, country) => { return total + country.population }, 0
        )

        setMetaData({
          totalCountries: data.length,
          worldPopulation: totalPopulation
        })
        setCountries(data)
        setFilteredCountries(data)
        setStats({
          population: getPopulationStat(data, totalPopulation),
          languages: getLanguagesStat(data)
        })
      } catch(error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const filterData = (e) => {
    const query = e.target.value.toLowerCase()

    const filteredData = countries.filter((e) => {
      return (
        e.name.toLowerCase().includes(query) ||
        (e.capital || '').toLowerCase().includes(query) ||
        e.languages.findIndex(lang => lang.name.toLowerCase().includes(query)) !== -1
      )
    })

    setFilteredCountries(filteredData)
    setStats({
      population: getPopulationStat(filteredData, metaData.worldPopulation),
      languages: getLanguagesStat(filteredData)
    })

    const searchCount = !query ? '' : filteredData.length
    setFilterResultCount(searchCount)
  }

  return (
    <div className='App'>
      <Header
        totalCountries={metaData.totalCountries}
        filterResultCount={filterResultCount}
      />
      <Main
        filteredCountries={filteredCountries}
        stats={stats}
        filterData={filterData}
      />
      <Footer />
    </div>
  )
}

export default App
