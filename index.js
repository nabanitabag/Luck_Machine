// var React = require('react');
// var ReactDOM = require('react-dom');
import React from "react";
import ReactDOM from "react-dom";

const fname = "Nabanita";
const lname = "Bag";
const year = new Date().getFullYear();
const image = "https://picsum.photos/200";
const customStyle = {
  color: "purple",
  fontSize: "50px",
  border: "1px solid black"
};

customStyle.fontSize = "40px";

ReactDOM.render(
  <div>
    <h1
      style={customStyle}
      className="heading"
      contentEditable="true"
      spellCheck="false"
    >
      Hello {fname + " " + lname}!
    </h1>
    {/* <h1>Hello {`${fname} ${lname}`}!</h1> */}
    {/* js expression only, not statements */}
    <p>Your lucky number is {Math.floor(Math.random() * 100)}.</p>
    <p>Your lucky image is</p>
    <img src={image} alt="img" />
    <p>Created by {fname}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
