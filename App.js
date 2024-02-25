import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
  <h1 id="heading" className="head">
    Hello World
  </h1>
);

//jsx takes care of injection attacks, it sanitizes our data
//React Component
const Title = () => (
  <div>
    <h1>{jsxHeading}</h1>
    <h2>React element inside react component</h2>
  </div>

)

//component composition => nested components
const Func = () => (
  <div id="container">
    {Title()}
    <Title></Title>
    <Title/>
    {1000}
    <h1 className="head">Hi this is Riya</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Func/>);
