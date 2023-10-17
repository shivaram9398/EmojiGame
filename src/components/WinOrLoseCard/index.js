import './index.css'

const WinOrLoseCard = props => {
  const {details, playAgain} = props
  const {won, send} = details
  const cliked = () => {
    playAgain()
  }
  return (
    <div className="container">
      {won ? (
        <>
          <div className="text">
            <h1 className="big">You Won</h1>
            <p className="medium">Best Score</p>
            <p className="score1">12/12</p>
            <button className="play-btn" type="button" onClick={cliked}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            className="last-image"
            alt="win or lose"
          />
        </>
      ) : (
        <>
          <div className="text">
            <h1 className="big">You Lose</h1>
            <p className="medium">Score</p>
            <p className="score1">{send}/12</p>
            <button className="play-btn" onClick={cliked} type="button">
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            className="last-image"
            alt="win or lose"
          />
        </>
      )}
    </div>
  )
}

export default WinOrLoseCard
