import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("./logo.png")} />
      </div>
      <div className="nav-items">
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return(
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={require("./logo.png")}/>
      <h3>Meghana foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>30 min delivery</h4>
    </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
