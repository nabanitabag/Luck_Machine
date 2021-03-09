// var React = require('react');
// var ReactDOM = require('react-dom');
import React from "react";
import ReactDOM from "react-dom";

const fname = "Nabanita";
const lname = "Bag";
const date = new Date();
const year = date.getFullYear();
const currentTime = date.getHours();
const image = "https://picsum.photos/200";
const customStyle = {
  color: ""
};

let greeting;

if(currentTime<12){
  greeting = "Morning";
  customStyle.color = "red";
} else if(currentTime<18){
  greeting = "Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1
      style={customStyle}
      className="heading"
      contentEditable="true"
      spellCheck="false"
    >
      Good {greeting} {fname + " " + lname}!
    </h1>
    {/* <h1>Hello {`${fname} ${lname}`}!</h1> */}
    {/* js expression only, not statements */}
    <p>Your lucky number for the day is {Math.floor(Math.random() * 100)}.</p>
    <p>And here is your photo of the day is</p>
    <img src={image} alt="img" />
    <p>Created by {fname}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
