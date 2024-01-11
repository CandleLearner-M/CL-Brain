import React from "react";

function FaceRecognition({imageURL}) {
    return (
    <div className="center ma3">
      <img alt=" " src={imageURL} className="mb3 br2 shadow-3 mxW-5" height='auto'/>

    </div>
  );
}

export default FaceRecognition;