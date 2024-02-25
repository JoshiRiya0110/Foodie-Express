import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
  <h1 id="heading" className="head">
    Hello World
  </h1>
);

const elem = React.createElement('h1',{id:"abc"},'Hey Geek');

//React Component
const func = () => {
  <div id="container">
    <h1 className="head">Hi this is Riya</h1>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
