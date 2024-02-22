import './index.css'

const FaqItem = props => {
  const {itemDetails, deleteImage} = props
  const {id, questionText, answerText} = itemDetails
  const {isClicked} = deleteImage

  const imgUrl = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const onClickIcon = () => {
    deleteImage(id)
  }

  return (
    <li className="list-item">
      <div className="flex-container">
        <h1 className="question-text-heading">{questionText}</h1>
        <img
          src={imgUrl}
          className="plus-image"
          alt="plus"
          onClick={onClickIcon}
        />
      </div>
      <hr className="horizontal-line" />

      {isClicked && <p className="answer-text-paragraph">{answerText}</p>}
    </li>
  )
}

export default FaqItem
