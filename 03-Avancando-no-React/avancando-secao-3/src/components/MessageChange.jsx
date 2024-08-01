
const MessageChange = ({ handleMessageProp}) => {
    const messages = ["Oi", "Olá", "Olá, tudo bem?"];
  return (
    <div>
      <button onClick={() => handleMessageProp(messages[0]) }>1</button>
      <button onClick={() => handleMessageProp(messages[1]) }>2</button>
      <button onClick={() => handleMessageProp(messages[2]) }>3</button>
    </div>
  )
}

export default MessageChange
