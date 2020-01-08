import React from "react";
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar.js";
import Header from "./components/Jumbotron.js";
// import Game from "./components/Game.js";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import images from "./components/Images.js";

let shuffle = require("shuffle-array");

class App extends React.Component {
  state = {
    imageArray: images,
    clickedImage: [],
    initialClick: true,
    gameMessage: "Choose any delectable dessert to start playing!",
    currentScore: 0,
    highScore: 0
  };

  handleImageClick = imageId => {
    // console.log("You clicked an image");
    // After first image is clicked, changing first image click from true to false.
    // Updating game message
    if (this.state.initialClick) {
      this.setState({
        initialClick: false,
        gameMessage: "Correct!  Yum Yum!",
        currentScore: 1
      });
      this.handleHighScore();
      console.log("Initial click high score?", this.state.highScore);
    } else {
      this.checkImageArray(imageId);
      // this.handleHighScore();
      console.log(
        "This is the else initial click high score",
        this.state.highScore
      );
    }

    // Storing images in empty array after image is clicked.
    const clickedImages = this.state.clickedImage;
    clickedImages.push(imageId);

    //Shuffling images after any image is clicked
    const shuffledImages = shuffle(images);
    this.setState({ clickedImages, imageArray: shuffledImages });
  };

  checkImageArray = imageId => {
    const hasBeenClicked = this.state.clickedImages.includes(imageId);
    // console.log("checking image array", imageId);

    if (hasBeenClicked) {
      this.setState({
        initialClick: true,
        gameMessage: "Game Over!  No Dessert For You!!! Click any image to play again",
        currentScore: 0
      });

      // this.handleGameReset();
      //Update message (game over!  No dessert for you)
      //Reset game
      console.log("game over, no dessert for you");
    } else {
      // super(props);
      this.setState({
        currentScore: this.state.currentScore + 1,
        highScore: this.state.highScore + 0
      });
      // this.handleHighScore();
      console.log("This is the game over high score", this.state.highScore);
      this.handleHighScore();
    }
  };

  handleHighScore = () => {
    this.setState({ highScore: this.state.highScore + 1 });
    console.log("This is the handle high score function", this.state.highScore);
    if (this.state.highScore > this.state.currentScore) {
      this.setState({ highScore: this.state.highScore + 0 });
    }
  };

  // handleHighScore = () => {
  //   if (this.state.currentScore > this.state.highScore) {
  //     this.setState({ highScore: this.state.highScore + 1 });
  //   }
  // }

  // handleGameReset = () => {
  //   if (this.state.currentScore === 0) {
  //     this.setState({ gameMessage: "Choose any delectable dessert to start playing!", currentScore: 0, highScore: this.state.highScore })
  //   }
  // }

  // SAVE HIGH SCORE!!!!

  render() {
    return (
      <div>
        <Header />
        <MDBContainer>
          <NavBar
            gameMessage={this.state.gameMessage}
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
          />
          <MDBRow>
            {this.state.imageArray.map(image => (
              <MDBCol sm="6" md="4" lg="3" key={image.id}>
                <div className="card">
                  <img
                    onClick={() => this.handleImageClick(image.id)}
                    src={image.source}
                    className="card-image"
                    alt={image.name}
                  ></img>
                </div>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
