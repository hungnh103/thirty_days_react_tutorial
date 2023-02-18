import { useRef } from 'react'
import '../styles/composer.scss'

const Composer = ({ writeMessage }) => {
  const counter = useRef(null)
  const sentBtn = useRef(null)

  const countRemainChars = (e) => {
    const chars = e.target.value.length
    const charCounter = counter.current
    const submitBtn = sentBtn.current

    charCounter.innerHTML = 250 - chars

    if(chars > 0 && chars <= 250) {
      submitBtn.style.background = '#1da1f2'
      submitBtn.disabled = false
    } else {
      submitBtn.style.background = '#92d0f0'
      submitBtn.disabled = true
    }
  }

  return (
    <div className='composer-wrapper'>
      <form onSubmit={writeMessage} className='composer-wrapper__form'>
        <div className='composer-wrapper__form__input'>
          <textarea
            className='message-board message-composer'
            name='messageContent'
            rows='5'
            placeholder="Write something here..."
            onChange={countRemainChars}
            maxLength='250'
          ></textarea>
          <div className='character-counter' ref={counter}>250</div>
        </div>

        <div className='composer-wrapper__form__btn-submmit'>
          <input name='sentMgsBtn' type='submit' value='Sent' disabled ref={sentBtn} />
        </div>
      </form>
    </div>
  )
}

export default Composer
