import React from "react";
import loaderImg from "../Assets/logo2.png";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"} className="preloader-container">
      {props.load && (
        <img src={loaderImg} alt="Loading..." className="preloader-logo" />
      )}
    </div>
  );
}

export default Pre;
