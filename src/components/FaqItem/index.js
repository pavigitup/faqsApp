import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    const {id, questionText, answerText} = props.faqItem

    this.state = {
      id,
      questionText,
      answerText,
      ShowAnswer: props.ShowAnswer,
    }
  }

  addButton = () => {
    this.setState(prevState => ({ShowAnswer: !prevState.ShowAnswer}))
  }

  render() {
    const {id, questionText, answerText, ShowAnswer} = this.state

    return (
      <li key={id} className="each-list">
        <div className="content-con">
          <h1 className="head-d">{questionText}</h1>
          {!ShowAnswer ? (
            <button
              type="button"
              className="button-add"
              onClick={this.addButton}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            </button>
          ) : (
            <button
              type="button"
              className="button-add"
              onClick={this.addButton}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            </button>
          )}
        </div>
        {ShowAnswer && (
          <div className="ans-con">
            <hr className="horizontal-line" />
            <p className="para-text">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
