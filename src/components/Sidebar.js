import { Component } from 'react'
import '../styles/Sidebar.css'

const TagList = ({ stat, handleClick }) => (
  stat.map(([ country, count ]) => (
    <a
      href={`#${country}`}
      key={country}
      onClick={handleClick}
      data-country_name={country}
    >
      {country} ({count})
    </a>
  ))
)

class Sidebar extends Component {
  render() {
    return(
      <div className='sidebar'>
        <TagList
          stat={this.props.stat}
          handleClick={this.props.handleClick}
        />
      </div>
    )
  }
}

export default Sidebar
