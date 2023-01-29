export const getPopulationStat = (data, worldPopulation = null) => {
  const populationStat = [...data].sort((c1, c2) => { return c2.population - c1.population })
                                  .map((c) => { return (({ name, population }) => ({ name, population }))(c) })
                                  .slice(0, 10)
  populationStat.unshift({ name: 'World', population: worldPopulation })

  return populationStat
}

export const getLanguagesStat = (data) => {
  return Array.from(
    data.map(({languages}) => { return languages.map((lang) => { return lang.name }) }).flat()
        .reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map()),
    ([lang, count]) => ({ lang, count })
  ).sort((l1, l2) => { return l2.count - l1.count}).slice(0, 10)
}
