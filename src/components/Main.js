import '../styles/Main.css'
import CaroGrid from './CaroGrid'

const Main = ({ data: {numOfColors, colors}, onClick, userInput }) => {
  const onMouseOver = (e) => {
    e.target.style.backgroundColor = 'pink'
  }

  const onMouseLeave = (e) => {
    e.target.style.backgroundColor = 'white'
  }

  return (
    <div className='main-wrapper'>
      <div className='control-fields'>
        <input
          type="text"
          ref={userInput}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
        <button onClick={onClick}>Generate</button>
      </div>

      <div className='clear'></div>

      <div className='caro-grid'>
        <CaroGrid colors={colors} />
      </div>
    </div>
  )
}

export default Main
