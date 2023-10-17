import './index.css'

const EmojiCard = props => {
  const {details, changed} = props
  const {id, emojiUrl, emojiName} = details
  const emojiClick = () => {
    changed(id)
  }
  return (
    <li className="list">
      <button
        className="emoji-con"
        type="button"
        onClick={emojiClick}
        key={emojiName}
      >
        <img src={emojiUrl} className="image" alt="emojiName" />
      </button>
    </li>
  )
}
export default EmojiCard
