import { useRef } from 'react'

// Getting Data from input
const App1 = () => {
  const ref = useRef(null)
  const onClick = () => {
    let value = ref.current.value
    alert(value)
  }

  return (
    <div className='App'>
      <h1>How to use data from uncontrolled input using useRef</h1>
      <input type="text" ref={ref} />
      <br />
      <button onClick={onClick}>Click to focus on input</button>
    </div>
  )
}

// Focus
const App2 = () => {
  const ref = useRef(null)
  const onClick = () => {
    ref.current.focus()
  }

  return (
    <div className='App'>
      <h1>How to focus on input element using useRef</h1>
      <input type="text" ref={ref} />
      <br />
      <button onClick={onClick}>Click to focus on input</button>
    </div>
  )
}

// Getting Content from DOM tree
const App3 = () => {
  const ref = useRef(null)
  const onClick = () => {
    // let value = ref.current.innerHTML
    let value = ref.current.textContent
    alert(value)
  }

  return (
    <div className='App'>
      <h1 ref={ref}>How to getting content from the DOM tree</h1>
      <button onClick={onClick}>Getting content</button>
    </div>
  )
}

// Accessing and Styling a DOM element
const App = () => {
  const ref = useRef(null)
  const onClick = () => {
    ref.current.style.backgroundColor = '#61dbfb'
    ref.current.style.padding = '50px'
    ref.current.style.textAlign = 'center'
  }

  return (
    <div className='App'>
      <h1 ref={ref}>How to style HTML from the DOM tree using useRef</h1>
      <button onClick={onClick}>Style it</button>
    </div>
  )
}

export default App
