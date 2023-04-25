// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  render() {
    const {faqDetails, whenClicked} = this.props
    const {id, questionText, answerText, opened} = faqDetails

    const toggleFaq = () => {
      whenClicked(id)
    }

    return (
      <li className="faq-container">
        <div className="close-container">
          <h1>{questionText}</h1>
          <img
            src={
              opened
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={opened ? 'minus' : 'plus'}
            onClick={toggleFaq}
          />
        </div>
        {opened && (
          <div>
            <hr />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
