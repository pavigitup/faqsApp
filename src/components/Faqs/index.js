import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {ShowAnswer: false}

  render() {
    const {faqsList} = this.props
    const {ShowAnswer} = this.state
    return (
      <div className="faq-bg">
        <div className="faq-con">
          <h1 className="header">FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem
                faqItem={eachItem}
                key={eachItem.id}
                openAns={this.openAns}
                ShowAnswer={ShowAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
