import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';

function Header() {
    // var backgroundImage = {
    //   backgroundImage:"Assets/Images/Jumbotron-BG.jpg",
    // }
  return (
    <div>
    <Jumbotron className="jumbotron mt-5"  
      style={{
        backgroundImage:
        "url('Assets/Images/Jumbotron-BG.jpg')",
        backgroundSize: 
        "cover"
        }}>
        
        <h1 className="text-center">Delectable Desserts Memory</h1>
        <p className="text-center instructions">
        Click on an image to earn points, but don't click on any more than once!
        </p>
    </Jumbotron>
    </div>
  );
};

export default Header;