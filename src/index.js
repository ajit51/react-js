import React from 'react';
import ReactDOM from 'react-dom';

const fName = "Ajit";
const lName = "Kumar";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

const links = "https://www.thapatechnical.com/";

ReactDOM.render(
<>
  <h1 contentEditable="true"> { `Hello, My name is ${ fName } ${lName}`}</h1>
  <img src={img1} alt="random images1"/>
  <img src={img2} alt="random images2"/>
  <a href={links} target="_blank">
  <img src={img3} alt="random images3" />
  </a>
  </>
  ,
  document.getElementById("root")
)