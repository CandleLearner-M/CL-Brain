import React from "react";

function FaceRecognition({imageURL}) {
  return (
    <div className="center mxW-5 ma3">
      <img alt=" " src={imageURL} className="mb3 br2 shadow-3" />
    </div>
  );
}

export default FaceRecognition;