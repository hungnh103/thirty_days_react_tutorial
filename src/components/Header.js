import SearchCount from './Header/SearchCount'
import '../styles/Header.scss'

const Header = ({ totalCountries, filterResultCount }) => (
  <header className='header-wrapper' id='top'>
    <h1 className='header-wrapper__title'>World Countries Data</h1>
    <h4 className='header-wrapper__sub-title'>Currently, we have {totalCountries} countries</h4>
    <SearchCount filterResultCount={filterResultCount} />
  </header>
)

export default Header
