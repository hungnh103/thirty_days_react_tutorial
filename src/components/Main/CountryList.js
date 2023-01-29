const LanguageItem = ({ languages }) => {
  const languageCollect = languages.map((lang) => { return lang.name }).flat().join(', ')
  const textTitle = languages.length < 2 ? 'Language' : 'Languages'

  return (
    <>
      <span className='item-title'>{textTitle}:</span> {languageCollect}
    </>
  )
}

const CurrencyItem = ({ currencies }) => {
  const currencyCollect = currencies.map((cur) => { return cur.code }).flat().join(', ')
  const textTitle = currencies.length < 2 ? 'Currency' : 'Currencies'

  return (
    <>
      <span className='item-title'>{textTitle}:</span> {currencyCollect}
    </>
  )
}

const Country = ({
  country: {
    flags,
    name,
    capital,
    languages,
    population,
    currencies
  }
}) => (
  <div className='country-wrapper'>
    <div className='country-wrapper__flag'>
      <img src={flags.svg} alt={`${name} flag`} />
    </div>

    <div className='country-wrapper__name'>{name}</div>

    <div className='country-wrapper__info'>
      <ul>
        <li>
          <span className='item-title'>Capital:</span> {capital || 'N/A'}
        </li>
        <li>
          <LanguageItem languages={languages} />
        </li>
        <li>
          <span className='item-title'>Population:</span> {population.toLocaleString()}
        </li>
        <li>
          <CurrencyItem currencies={currencies || [{code: 'N/A'}]} />
        </li>
      </ul>
    </div>
  </div>
)

const CountryList = ({ filteredCountries }) => {
  const dataList = filteredCountries.map((country) => {
    return <Country key={country.name} country={country} />
  })

  return <div className='countries-list-wrapper'>{dataList}</div>
}

export default CountryList
