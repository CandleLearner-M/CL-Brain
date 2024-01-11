import React from "react";
import "./ImageLinkForum.css";

function ImageLinkForum({ onInputChange, onButtonClick }) {
  return (
    <div className="inline-block">
      <p className="f3 center tc">
        This magic Brain will detect the faces in your image. Give it a try...
      </p>
      <div className="center">
        <div className="form pa4 shadow-5 center br3">
          <input
            className="br2 f4 pa2 w-70 center"
            type="text"
            placeholder="Enter the Image URL here"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow hover-effect f4 pv2 ph3 bg-purple white br2 ba b--white"
            onClick={onButtonClick}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForum;
