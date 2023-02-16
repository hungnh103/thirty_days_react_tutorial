import { useRef } from 'react'
import '../styles/message.scss'

import { FiEdit, FiTrash2 } from "react-icons/fi"
import { RxAvatar } from "react-icons/rx"

const Message = ({
  updateMessage,
  deleteMessage,
  content: { id, username, nickname, content, updated_at }
}) => {
  const displaySection = useRef(null)
  const formSection = useRef(null)

  const switchToEditForm = () => {
    const content = displaySection.current
    const form = formSection.current

    content.style.display = 'none'
    form.style.display = 'block'
  }

  const switchToDisplaySection = (e) => {
    e.preventDefault()

    const content = displaySection.current
    const form = formSection.current

    content.style.display = 'block'
    form.style.display = 'none'
  }

  return (
    <div className='message-wrapper'>
      <div className="message-wrapper__user-info">
        <span className='avatar'><RxAvatar /></span>
        <span className='username'>{username}</span>
        <span className='nickname'>@{nickname}</span>
      </div>

      <div className='message-wrapper__body'>
        <div className='display-section' ref={displaySection}>
          <div className="display-section__content">{content}</div>
          <div className="display-section__footer">
            <div className="action-buttons">
              <button className='edit-btn' onClick={switchToEditForm}>
                <FiEdit />
              </button>
              <button className='delete-btn' onClick={deleteMessage} data-id={id}>
                <FiTrash2 />
              </button>
            </div>
            <div className="timestamp">{updated_at}</div>
          </div>
        </div>

        <form className='form-update-section' ref={formSection}>
          <textarea
            className='message-composer'
            rows='5'
            defaultValue={content}
          ></textarea>
          <button className='save-btn' onClick={updateMessage} data-id={id}>Save</button>
          <button className='cancel-btn' onClick={switchToDisplaySection}>Cancel</button>
        </form>

      </div>
    </div>
  )
}

export default Message
