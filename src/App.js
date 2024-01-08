import "./App.css";
import Navigation from "./components/navigations/Navigation";
import Logo from "./components/logo/Logo";

function App() {
  return (
    <div className="App white">
      <div className=" bg-image"></div>
      <Navigation />
      <Logo />
      {/*<ImageLinkForum />
      <FaceRecognition/> */}
    </div>
  );
}

export default App;
