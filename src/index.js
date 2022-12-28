import React from 'react';
import ReactDOM from 'react-dom';

const fName = "Ajit";
const lName = "Kumar";

ReactDOM.render(
<>
  <h1> { ` My name is ${ fName } ${lName}`}</h1>
  <h1>My lucky number is { 2 + 5}</h1>
  </>
  ,
  document.getElementById("root")
)