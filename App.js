/*
    <div id="parent">
        <div id="child">
            <h1></h1>
            <h2></h2>
        </div>
    <div/>

    siblings tag
    ReactElement is an object => after rendering it becomes tag
*/ 

const parent = React.createElement("div",{id:"parent"}, React.createElement("div", {
    id:"child"},[React.createElement("h1",{},"I am an h1 tag"), React.createElement("h2",{},"I am an h2 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //it is converting the heading into h1 tag