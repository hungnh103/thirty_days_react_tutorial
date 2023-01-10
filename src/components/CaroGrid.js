import ColorCell from './ColorCell'

const CaroGrid = ({ colors }) => {
  return colors.map((color) => <ColorCell key={color} color={color} />)
}

export default CaroGrid
