import Message from "./Message"

const MessageList = ({ updateMessage, deleteMessage, messages }) => {
  const msgList = messages.map((message) => (
    <Message
      key={message.id}
      updateMessage={updateMessage}
      deleteMessage={deleteMessage}
      content={message}
    />
  ))

  return <div>{msgList}</div>
}

export default MessageList
