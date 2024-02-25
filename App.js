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
const Title = () => (
  <h1>This is Title</h1>

)

//component composition => nested components
const Func = () => (
  <div id="container">
    <Title/>
    <h1 className="head">Hi this is Riya</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Func/>);
