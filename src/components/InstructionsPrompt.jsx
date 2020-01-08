import React from "react";

class Instructions extends React.Component {
  state = {
    initialInstruction: 'Click Any Image To Start Playing!'
  }

  render (props) {
    return (
      <p>{this.state.initialInstruction}</p>
    )
  }
}

export default Instructions;