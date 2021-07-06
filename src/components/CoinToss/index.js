// Write your code here
import {Component} from 'react'
import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    count: 0,
    heads: 0,
    tails: 0,
    tossImage: headsImg,
  }

  onTossCoin = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        tossImage: headsImg,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        tossImage: tailsImg,
      }))
    }
  }

  render() {
    const {count, heads, tails, tossImage} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container img-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img className="toss-img" src={tossImage} alt="toss result" />
          <button className="btn-style" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total: {count}</p>
            <p className="heads">Heads: {heads}</p>
            <p className="tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
