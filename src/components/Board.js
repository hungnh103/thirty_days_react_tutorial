import Composer from './Composer'
import MessageList from './MessageList'

import '../styles/board.scss'

const Board = ({
  writeMessage,
  updateMessage,
  deleteMessage,
  messages
}) => {
  return (
    <main className='board'>
      <Composer writeMessage={writeMessage} />
      <MessageList
        updateMessage={updateMessage}
        deleteMessage={deleteMessage}
        messages={messages}
      />
    </main>
  )
}

export default Board
