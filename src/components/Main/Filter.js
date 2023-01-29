import { VscGraph } from 'react-icons/vsc'

const Filter = ({ filterData }) => (
  <div className='filter-wrapper'>
    <div className='filter-wrapper__search-bar'>
      <input
        type='text'
        placeholder='Search countries by name, capital and languages'
        onChange={filterData}
      />
    </div>

    <div className='filter-wrapper__stat-navigation'>
      <a href="#stat" className='nav-icon'><VscGraph /></a>
    </div>
  </div>
)

export default Filter
