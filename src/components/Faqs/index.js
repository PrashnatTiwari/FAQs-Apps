import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {
    isClicked: false,
  }

  deleteImage = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="unordered-list-item">
            {faqsList.map(eachItem => (
              <FaqItem itemDetails={eachItem} deleteImage={this.deleteImage} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
