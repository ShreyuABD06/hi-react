import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement("div", {id:"parent"},
React.createElement("div", {id:"child"},//Single
[React.createElement("h1", {},"This is h1"), React.createElement("h2", {},"This is react h2")]) //Multiple in an array
); //Object 
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//React object is passed as argument to render as DOM object