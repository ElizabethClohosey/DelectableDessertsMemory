import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
// import Score from './Score.jsx';
// import App from 'src/App.js';
// import Instructions from './InstructionsPrompt';


function NavBar(props) {
  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Text className="nav-text">
          {/* <Instructions/> */}
          {props.gameMessage}
        </Navbar.Text>
        <Navbar.Text className="nav-text">
          <p>Current Score: {props.currentScore}</p>
          <p>High Score: {props.highScore}</p>
          {/* <Score/> */}
        </Navbar.Text>
      {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  
  );
}

export default NavBar;