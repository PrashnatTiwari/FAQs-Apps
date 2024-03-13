import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="unordered-list-item">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} itemDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
