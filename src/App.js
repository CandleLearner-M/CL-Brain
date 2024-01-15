import "./App.css";
import Navigation from "./components/navigations/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForum from "./components/ImageLinkForum/ImageLinkForum";
import Rank from "./components/Rank/Rank";
import BackgroundEffect from "./components/BackgroundEffect";
import { Component } from "react";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Login from "./components/login/Login";

function returnClarifaiRequestOption(imageURL) {
  const PAT = "5851bf812aee43c7b596e389ae7a999a";

  const USER_ID = "candlelearner";
  const APP_ID = "clBrain";

  const MODEL_ID = "face-detection";
  const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
  const IMAGE_URL = imageURL;
  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
            // "base64": IMAGE_BYTES_STRING
          },
        },
      },
    ],
  });
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
  return requestOptions;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: " ",
      imageURL: "",
      box: {},
      route: "signin",
    };
  }

  calcPosition = (data) => {
    const positionsBox =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const height = Number(image.height);
    const width = Number(image.width);

    return {
      left: positionsBox.left_col * width,
      top: positionsBox.top_row * height,
      right: width - positionsBox.right_col * width,
      bottom: height - positionsBox.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonClick = () => {
    this.setState({ imageURL: this.state.input });
    fetch(
      "https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs",
      returnClarifaiRequestOption(this.state.input)
    )
      .then((response) => response.json())
      .then((result) => this.displayFaceBox(this.calcPosition(result)))
      .catch((error) => console.log("error", error));
    // .then((result) => {
    //   const regions = result.outputs[0].data.regions;
    //   console.log(regions);

    //   regions.forEach((region) => {
    //     // Accessing and rounding the bounding box values
    //     const boundingBox = region.region_info.bounding_box;
    //     const topRow = boundingBox.top_row.toFixed(3);
    //     const leftCol = boundingBox.left_col.toFixed(3);
    //     const bottomRow = boundingBox.bottom_row.toFixed(3);
    //     const rightCol = boundingBox.right_col.toFixed(3);

    //     region.data.concepts.forEach((concept) => {
    //       // Accessing and rounding the concept value
    //       const name = concept.name;
    //       const value = concept.value.toFixed(4);

    //       this.setState({
    //         box: {
    //           top: topRow * 100,
    //           bottom: bottomRow * 100,
    //           left: leftCol * 100,
    //           right: rightCol * 100,
    //         },
    //       });

    //       console.log(
    //         `${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`
    //       );
    //     });
    //   });
    // })
  };

  onRouteChange =  () => {
    if(this.state.route ==='signin' ) this.setState({ route: "home" });
    else if(this.state.route === 'home') this.setState({ route: "signin"})
  };

  render() {
    return (
      <div className="App white w-100 ">
        <div className=" bg-image"></div>
        <BackgroundEffect className="w-100" />
        {this.state.route === "signin" ? (
          <Login onRouteChange={this.onRouteChange}/>
        ) : (
          <>
            <Navigation onRouteChange={this.onRouteChange}/>
            <Logo />
            <Rank />
            <ImageLinkForum
              onInputChange={this.onInputChange}
              onButtonClick={this.onButtonClick}
            />
            <FaceRecognition
              imageURL={this.state.imageURL}
              box={this.state.box}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
