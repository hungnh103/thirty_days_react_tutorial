import Filter from './Main/Filter'
import CountryList from './Main/CountryList'
import Statistics from './Main/Statistics'

import '../styles/Main.scss'

const Main = ({ filteredCountries, stats, filterData }) => {
  return (
    <main className='main-wrapper'>
      <Filter filterData={filterData} />
      <CountryList filteredCountries={filteredCountries} />
      <Statistics stats={stats} />
    </main>
  )
}

export default Main
