import { Component } from 'react'
import '../styles/ObjectList.css'

const ListItems = ({ items, viewDetail }) => (
  items.map((cat) => (
    <div className='cat-info' key={cat.id}>
      <ul>
        <li className='name'>
          <a
            href={`#${cat.id}`}
            onClick={viewDetail}
            data-id={cat.id}
            data-name={cat.name}
            id={cat.id}
          >
            {cat.name}
          </a>
        </li>
        <li className='country'>{cat.origin}</li>
        <li><span className='title'>Temperament</span>: {cat.temperament}</li>
        <li><span className='title'>Life span</span>: {cat.life_span} years</li>
        <li><span className='title'>Weight</span>: {cat.weight.metric} kg</li>
        <li>
          <span className='title'>Description</span>
          <br />
          {cat.description}
        </li>
      </ul>
    </div>
  ))
)

class ObjectList extends Component {
  render() {
    return(
      <div className='list-content'>
        <ListItems
          items={this.props.data}
          viewDetail={this.props.viewItem}
        />
      </div>
    )
  }
}

export default ObjectList
