import React from 'react';
import ReactDOM from 'react-dom';

const fName = "Ajit";
const lName = "Kumar";

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
<>
  <h1> { `Hello, My name is ${ fName } ${lName}`}</h1>
  <h1>Current Date is = {currDate}</h1>
  <h1>Current Time is = {currTime}</h1>
  </>
  ,
  document.getElementById("root")
)