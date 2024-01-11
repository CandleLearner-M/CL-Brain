import React from "react";
import './FaceRecogntion.css'

function FaceRecognition({ imageURL, box }) {
  return (
    <div className="center ma">
      <div className="absolute mt2 center">
        
      <img
        alt=" "
        id="inputImage"
        src={imageURL}
        className="br2 shadow-3"
        height="auto"
        width="500px"
        />
      <div
        className="smart-box"
        style={{
          top: box.top,
          right: box.right,
          left: box.left,
          bottom: box.bottom,
        }}
        ></div>
        </div>
    </div>
  );
}

export default FaceRecognition;
