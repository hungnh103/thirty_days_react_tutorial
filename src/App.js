import { useState, useRef } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

const genHexaColor = () => {
  const charSet = '0123456789abcdef'
  let colorCode = '#'

  for (let i=0; i<6; i++) {
    colorCode += charSet[Math.floor(Math.random() * 16)]
  }

  return colorCode
}

const App = () => {
  const defaultAmount = 27

  const defaultColorList = (num = defaultAmount) => {
    return Array.from(Array(num).keys()).map((n) => {
      return genHexaColor()
    })
  }

  const initialState = {
    numOfColors: '',
    colors: defaultColorList()
  }

  const [data, setData] = useState(initialState)
  const userInput = useRef(null)

  const onClick = () => {
    const newColorList = defaultColorList(Number(userInput.current.value) || defaultAmount)
    setData({ ...data, colors: newColorList })
  }

  return (
    <div className='App'>
      <Header />
      <Main data={data} onClick={onClick} userInput={userInput} />
    </div>
  )
}

export default App
