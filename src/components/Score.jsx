import React from "react";

class Score extends React.Component {
  state = {
    currentScore: 0,
    highScore: 0
  }

  render () {
    return (
      <p>Current Score: {this.state.currentScore} | High Score: {this.state.highScore}</p>
    )
  }
}

export default Score;