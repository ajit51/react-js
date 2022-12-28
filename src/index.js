import React from 'react';
import ReactDOM from 'react-dom';

const name = "Vonod Thapa";

//we can write JSX expression but not write statemenet 

ReactDOM.render(
<>
  <h1>My name is { name }</h1>
  <h1>My lucky number is { 2 + 5}</h1>
  <h1>Random number is {Math.random()}</h1>
  </>
  ,
  document.getElementById("root")
)