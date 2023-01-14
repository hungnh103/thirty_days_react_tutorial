import { Component } from 'react'
import '../styles/ObjectDetail.css'

const CatImg = ({ link, cat: {id, name} }) => (
  link ? (
    <>
      <h3>
        <a href={`#${id}`}>{name}</a>
      </h3>
      <img src={link} alt={name} />
    </>
  ) : (
    <span className='placeholder-text'>click cat name to view its image</span>
  )
)

class ObjectDetail extends Component {
  render() {
    return (
      <div className='cat-detail'>
        <CatImg
          link={this.props.url}
          cat={this.props.catObject}
        />
      </div>
    )
  }
}

export default ObjectDetail
