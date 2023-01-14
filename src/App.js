import { Component } from 'react'
import axios from 'axios'

import Sidebar from './components/Sidebar'
import ObjectList from './components/ObjectList'
import ObjectDetail from './components/ObjectDetail'

import './App.css'

const ALL_TEXT = 'all'

class App extends Component {
  state = {
    data: [],
    nationStat: [],
    filteredData: [],
    singleImage: '',
    selectedCat: {
      id: '',
      name: ''
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const listUrl = 'https://api.thecatapi.com/v1/breeds'

      const response = await axios.get(listUrl)
      const data = await response.data
      const nationStat = this.getStatByNations(data)

      this.setState({ data, nationStat, filteredData: data })
    } catch (error) {
      console.log(error)
    }
  }

  getStatByNations = (data) => {
    const nations = data.map((cat) => { return cat.origin })

    let nationStat = {}
    for (const nation of nations) {
      if (nationStat[nation]) {
        nationStat[nation]++
      } else {
        nationStat[nation] = 1
      }
    }
    nationStat = Object.entries(nationStat).sort((a, b) => {return a[1] - b[1]})
    nationStat.unshift([ALL_TEXT, data.length])
    return nationStat
  }

  filterData = (e) => {
    const country = e.target.dataset.country_name

    const filteredData = country === ALL_TEXT ? (
      this.state.data
    ) : (
      this.state.data.filter((cat) => cat.origin === country)
    )

    this.setState({
      filteredData,
      singleImage: '',
      selectedCat: { id: '', name: '' }
    })
  }

  viewItem = (e) => {
    const loadingImg = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'
    const catId = e.target.dataset.id
    const catName = e.target.dataset.name
    const selectedCat = {
      id: catId,
      name: catName
    }

    this.setState({ singleImage: loadingImg, selectedCat })
    this.fetchItemData(catId)
  }

  fetchItemData = async (id) => {
    const itemUrlBase = 'https://api.thecatapi.com/v1/images/search?breed_id='
    const itemUrl = `${itemUrlBase}${id}`

    try {
      const response = await axios.get(itemUrl)
      const data = await response.data
      const singleImage = data[0].url

      this.setState({ singleImage })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {
      data,
      nationStat,
      filteredData,
      singleImage,
      selectedCat
    } = this.state

    return (
      <div className='App'>
        {
          !!data.length ? (
            <>
              <Sidebar
                stat={nationStat}
                handleClick={this.filterData}
              />
              <ObjectList
                data={filteredData}
                viewItem={this.viewItem}
              />
              <ObjectDetail url={singleImage} catObject={selectedCat} />
            </>
          ) : (
            <span className='placeholder-text'>data loading...</span>
          )
        }
      </div>
    )
  }
}

export default App
