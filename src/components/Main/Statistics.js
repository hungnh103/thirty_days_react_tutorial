const PopulationSection = ({ population }) => {
  if(!!population.length) {
    const maxValue = population[0].population

    const populationList = population.map((e) => {
      const relativeWidth = e.population / maxValue * 100
      const style = { width: `${relativeWidth}%` }

      return (
        <div key={e.name} className='stat-item'>
          <div className='title'>{e.name}</div>
          <div className='bar'>
            <div className='bar-ratio' style={style}></div>
          </div>
          <div className='stat-data'>{e.population.toLocaleString()}</div>
        </div>
      )
    })

    return <div className='graph population-section'>{populationList}</div>
  }
}

const LanguagesSection = ({ languages }) => {
  if(!!languages.length) {
    const maxValue = languages[0].count

    const langList = languages.map((e) => {
      const relativeWidth = e.count / maxValue * 100
      const style = { width: `${relativeWidth}%` }

      return (
        <div key={e.lang} className='stat-item'>
          <div className='title'>{e.lang}</div>
          <div className='bar'>
            <div className='bar-ratio' style={style}></div>
          </div>
          <div className='stat-data'>{e.count.toLocaleString()}</div>
        </div>
      )
    })

    return <div className='graph languages-section' style={{ display: 'none' }}>{langList}</div>
  }
}

const Statistics = ({ stats: { population, languages } }) => {
  const handleClick = (e) => {
    const buttonType = e.target.name

    if(buttonType === 'population') {
      document.querySelector('.population-section').style.display = 'block'
      document.querySelector('.languages-section').style.display = 'none'
      document.querySelector('.stat-wrapper__dashboard-legend').innerHTML = '10 Most populated countries'
    } else {
      document.querySelector('.population-section').style.display = 'none'
      document.querySelector('.languages-section').style.display = 'block'
      document.querySelector('.stat-wrapper__dashboard-legend').innerHTML = '10 Most spoken languages'
    }
  }

  return (
    <div className='stat-wrapper' id='stat'>
      <div className='stat-wrapper__dashboard'>
        <div className='stat-wrapper__dashboard-buttons'>
          <button onClick={handleClick} name='population'>Population</button>
          <button onClick={handleClick} name='languages'>Languages</button>
        </div>
        <div className='stat-wrapper__dashboard-legend'>
          10 Most populated countries
        </div>
      </div>

      <div className='stat-wrapper__display-data'>
        <PopulationSection population={population} />
        <LanguagesSection languages={languages} />
      </div>
    </div>
  )
}

export default Statistics
