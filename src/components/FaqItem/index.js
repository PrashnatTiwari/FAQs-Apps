import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  deleteImage = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {itemDetails} = this.props
    const {questionText, answerText} = itemDetails
    const {isClicked} = this.state
    const imgUrl = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isClicked ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="flex-container">
          <h1 className="question-text-heading">{questionText}</h1>
          <img
            src={imgUrl}
            className="plus-image"
            alt={altText}
            onClick={this.deleteImage}
          />
        </div>

        {isClicked && (
          <>
            <hr className="horizontal-line" />
            <p className="answer-text-paragraph">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}

export default FaqItem
