import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";

function NavBar(props) {
  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Text className="nav-text">
          {props.gameMessage}
        </Navbar.Text>
        <Navbar.Text className="nav-text">
          <p>Current Score: {props.currentScore}</p>
          <p>High Score: {props.highScore}</p>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavBar;