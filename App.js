import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", {
    id: "child"
}, [React.createElement("h1", {}, "This is foodie express"), React.createElement("h2", {}, "I am an h2 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //it is converting the heading into h1 tag