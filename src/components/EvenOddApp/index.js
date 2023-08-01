// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  clickButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({num: prevState.num + randomNumber}))
  }

  render() {
    const {num} = this.state
    const reminder = num % 2

    let numType
    if (reminder === 0) {
      numType = 'Even'
    } else {
      numType = 'Odd'
    }

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="main-heading">Count {num}</h1>
          <div className="container">
            <p className="count-heading">Count is {numType}</p>
            <button type="button" className="button" onClick={this.clickButton}>
              Increment
            </button>
            <p className="description">
              *Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
