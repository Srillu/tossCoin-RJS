// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {isActive: true, total: 0, heads: 0, tails: 0}

  onClickTossBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isActive: true,
        heads: prevState.heads + 1,
        total: prevState.total + 1,
      }))
    } else {
      this.setState(prevState => ({
        isActive: false,
        tails: prevState.tails + 1,
        total: prevState.total + 1,
      }))
    }
  }

  render() {
    const {isActive, total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {isActive ? (
            <img
              className="toss-image"
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            />
          ) : (
            <img
              className="toss-image"
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            />
          )}

          <button
            onClick={this.onClickTossBtn}
            className="button"
            type="button"
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="points-names">Total: {total}</p>
            <p className="points-names">Heads: {heads}</p>
            <p className="points-names">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
