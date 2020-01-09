import React from "react";
import NavBar from "./components/NavBar.js";
import Header from "./components/Jumbotron.js";
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
    // After first image is clicked - initiate game
    // Updating game message, changing current score and handling high score
    if (this.state.initialClick) {
      this.setState({
        initialClick: false,
        gameMessage: "Correct!  Yum Yum!",
        currentScore: 1
      });
      this.handleHighScore();
    } else {
      //checking image array to see if images was previously clicked
      this.checkImageArray(imageId);
    }

    // Storing images in empty array after image is clicked.
    const clickedImages = this.state.clickedImage;
    clickedImages.push(imageId);

    //Shuffling images after any image is clicked
    const shuffledImages = shuffle(images);
    this.setState({ clickedImages, imageArray: shuffledImages });
  };

  // What I do if image was prviously clicked or not
  checkImageArray = imageId => {
    const hasBeenClicked = this.state.clickedImages.includes(imageId);

    // if image has been clicked
    if (hasBeenClicked) {
      // reset game
      this.setState({
        initialClick: true,
        gameMessage: "Game Over!  No Dessert For You!!! Click any image to play again",
        currentScore: 0,
        clickedImage: []
      });
    // if image was not clicked (pushed to imageArray), increment current score and handle high score
    } else {
      this.setState({
        currentScore: this.state.currentScore + 1,
      });
      this.handleHighScore();
    }
  };

  handleHighScore = () => {
    //increment high score by 1 
    this.setState({ highScore: this.state.highScore + 1 });
    //if high score is higher than current score, stop incrementing
    if (this.state.highScore > this.state.currentScore) {
      this.setState({ highScore: this.state.highScore + 0 });
    }
  };

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
