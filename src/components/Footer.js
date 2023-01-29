import { RxPinTop } from 'react-icons/rx'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <h4>Copyright &#169;2020 30 Days Of React</h4>
      <h4>Join 30 Days of React challenge</h4>
      <div className='footer-wrapper__nav-btn'>
        <a href="#top" className='nav-icon'><RxPinTop /></a>
      </div>
    </footer>
  )
}

export default Footer
