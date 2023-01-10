import { FaRegClipboard } from 'react-icons/fa'

const ColorCell = ({ color }) => {
  const cellStyle = {
    backgroundColor: color,
  }

  const onClick = (e) => {
    const toolTip = e.target.parentNode.closest('.color-cell').querySelector('.btn-tooltip')
    toolTip.style.backgroundColor = '#21bf73'
    toolTip.innerHTML = 'Copied'

    navigator.clipboard.writeText(color)
  }

  const onMouseOver = (e) => {
    e.target.parentNode.closest('.color-cell').querySelector('.btn-tooltip').style.display = 'inline'
  }

  const onMouseLeave = (e) => {
    const toolTip = e.target.parentNode.closest('.color-cell').querySelector('.btn-tooltip')
    toolTip.style.display = 'none'
    toolTip.style.backgroundColor = 'rgba(0,0,0, 0.4)'
    toolTip.innerHTML = 'Copy'
  }

  return (
    <div className='color-cell' style={cellStyle}>
      <div className='color-code'>{color}</div>
      <div>
        <button
          className='btn-copy'
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <FaRegClipboard />
        </button>
      </div>
      <span className='btn-tooltip'>Copy</span>
    </div>
  )
}

export default ColorCell
