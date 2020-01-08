import React from "react";
// import Container from 'react-bootstrap/Container';
// import Grid from 'react-bootstrap/Grid';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import images from "./Images.js";
var shuffle = require("shuffle-array");

class Game extends React.Component {
  state = {
    imageArray: images
  };

  handleImageClick = () => {
    console.log("You clicked an image");
    shuffle(images);
    console.log("The shuffle array is working", images);
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>

          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                onClick={this.handleImageClick}
                src={this.state.imageArray[0].source}
                className="card-image"
                alt={this.state.imageArray[0].name}
              ></img>
            </div>
          </MDBCol>

          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-2.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>

          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-3.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>

          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-4.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>

        </MDBRow>

        <MDBRow>

          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-5.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>

          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-6.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>

          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-7.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>

          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-8.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>

        </MDBRow>

        <MDBRow>
          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-9.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>
          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-10.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>
          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-11.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>
          <MDBCol sm="6"md="4" lg="3">
            <div className="card">
              <img
                src="Assets/Images/Dessert-12.jpg"
                className="card-image"
                alt="..."
              ></img>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Game;

// ********************  NOTES  **************************

// $$$$$$$$$$$$$$$$$$ UNUSED CODE $$$$$$$$$$$$$$$$$$$$$$$$

// function Game () {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-1.jpg" className="card-image" alt="..."></img>
//           </div>
//           {/* <img alt="k" src="Assets\Images\Dessert-1.jpg"></img> */}
//         </MDBCol>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-2.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-3.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-4.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//       </MDBRow>

//       <MDBRow>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-5.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-6.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-7.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-8.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//       </MDBRow>

//       <MDBRow>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-9.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-10.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-11.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//         <MDBCol md="6" lg="3">
//           <div className="card">
//             <img src="Assets/Images/Dessert-12.jpg" className="card-image" alt="..."></img>
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   )
// }

// export default Game;
