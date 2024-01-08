import "./App.css";
import Navigation from "./components/navigations/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForum from "./components/ImageLinkForum/ImageLinkForum";
import Rank from "./Rank/Rank";

function App() {
  return (
    <div className="App white">
      <div className=" bg-image"></div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForum />
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
