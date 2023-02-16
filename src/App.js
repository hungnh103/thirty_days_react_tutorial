import { useState, useEffect } from 'react'
import Board from './components/Board'
import axios from 'axios'

import './App.css'

const getCurrentTime = () => {
  const currentTime = new Date()
  const date = currentTime.toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})
  const time = currentTime.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric'}).toLowerCase()

  return `${date} ${time}`
}

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'http://localhost:5000/data?_sort=id&_order=desc'

    try {
      const response = await axios.get(url)
      const returnData = await response.data

      console.log('=======> inside fetchData', returnData)

      setData(returnData)
    } catch(error) {
      console.log(error)
    }
  }

  const writeMessage = (e) => {
    e.preventDefault()

    const userInput = e.target.elements['messageContent']
    const submitBtn = e.target.elements['sentMgsBtn']
    const counter = e.target.querySelector('.character-counter')
    const newMessage = userInput.value

    const data = {
      username: "Robert Nguyen",
      nickname: "robert",
      content: newMessage,
      updated_at: getCurrentTime()
    }

    createData(data)
    counter.innerHTML = '250'
    userInput.value = ''
    submitBtn.disabled = true
    submitBtn.style.background = '#92d0f0'
  }

  const createData = async (inputData) => {
    const url = 'http://localhost:5000/data'

    try {
      await axios.post(url, inputData)
      fetchData()
    } catch(error) {
      console.log(error)
    }
  }

  const deleteMessage = (e) => {
    const msgID = e.target.closest('.delete-btn').dataset.id

    if(window.confirm('Do you want delete this message?')) {
      deleteData(msgID)
    }
  }

  const deleteData = async (msgID) => {
    const url = `http://localhost:5000/data/${msgID}`

    try {
      await axios.delete(url)
      fetchData()
    } catch(error) {
      console.log(error)
    }
  }

  const updateMessage = (e) => {
    e.preventDefault()

    const msgID = e.target.dataset.id
    const form = e.target.closest('.form-update-section')
    const inputContent = form.querySelector('textarea').value
    const displaySection = form.closest('.message-wrapper__body').querySelector('.display-section')

    const data = {
      content: inputContent,
      updated_at: getCurrentTime()
    }

    updateData(msgID, data)
    form.style.display = 'none'
    displaySection.style.display = 'block'
  }

  const updateData = async (msgID, data) => {
    const url = `http://localhost:5000/data/${msgID}`

    try {
      await axios.patch(url, data)
      fetchData()
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <Board
        writeMessage={writeMessage}
        updateMessage={updateMessage}
        deleteMessage={deleteMessage}
        messages={data}
      />
    </div>
  )
}

export default App
