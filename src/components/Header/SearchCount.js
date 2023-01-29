const SearchCount = ({ filterResultCount }) => {
  if(!!filterResultCount) {
    return (
      <h4 className='header-wrapper__filter-result-title'>
        {filterResultCount} satisfied the search criteria
      </h4>
    )
  }
}

export default SearchCount
