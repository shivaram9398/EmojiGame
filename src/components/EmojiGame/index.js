import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    intialList: [],
    score: 0,
    Topscore: 0,
    won: false,
    lose: false,
    container: true,
    send: 0,
    nav: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    this.setState({
      score: 0,
      container: true,
      won: false,
      nav: false,
      lose: false,
    })
  }

  changed = id => {
    const {intialList} = this.state
    console.log(intialList.length)
    if (intialList.length === 0) {
      this.setState(prev => ({intialList: [...prev.intialList, id]}))
      this.setState(prev => ({score: prev.score + 1}))
    } else if (intialList.includes(id)) {
      const {Topscore, score} = this.state
      if (Topscore > score) {
        this.setState(prev => ({Topscore: prev.Topscore, send: prev.score}))
      } else {
        this.setState(prev => ({Topscore: prev.score, send: prev.score}))
      }
      this.setState({
        score: 0,
        intialList: [],
        lose: true,
        nav: true,
        container: false,
      })
      console.log('lose')
    } else {
      const {score} = this.state
      if (score === 11) {
        this.setState({Topscore: 12})
        this.setState({score: 0, won: true, nav: true, container: false})
        console.log('won')
      } else {
        this.setState(prev => ({
          score: prev.score + 1,
          intialList: [...prev.intialList, id],
        }))
      }
    }
  }

  render() {
    const shuffledEmojisList = this.shuffledEmojisList()
    const {intialList, container} = this.state
    console.log(intialList)
    return (
      <>
        <NavBar scores={this.state} />
        <div className="bg-container">
          {container ? (
            <ul className="list-con">
              {shuffledEmojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  details={each}
                  changed={this.changed}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard details={this.state} playAgain={this.playAgain} />
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
