// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    faqs: [],
  }

  componentDidMount() {
    this.updateFaqs()
  }

  updateFaqs = () => {
    const {faqsList} = this.props
    const updatedFaqs = faqsList.map(list => ({...list, opened: false}))
    this.setState({faqs: updatedFaqs})
  }

  openCloseFaq = id => {
    // const {faqsList} = this.props
    // const updatedFaqs = faqsList.map(list =>
    //   list.id === id ? {...list, opened: !list.opened} : list,
    // )
    this.setState(prevState => ({
      faqs: prevState.faqs.map(list =>
        list.id === id ? {...list, opened: !list.opened} : list,
      ),
    }))
  }

  render() {
    const {faqs} = this.state
    console.log(faqs)

    return (
      <div className="main-container">
        <div className="faqs-container">
          <h1>FAQs</h1>
          <ul>
            {faqs.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                faqDetails={eachFaq}
                whenClicked={this.openCloseFaq}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
