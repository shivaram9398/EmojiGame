import './index.css'

const NavBar = props => {
  const {scores} = props
  const {score, Topscore, nav} = scores
  return (
    <div className="div">
      <div className="img-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className="score">
        {nav ? null : <p>score: {score}</p>}
        {nav ? null : <p>Top score: {Topscore}</p>}
      </div>
    </div>
  )
}
export default NavBar
