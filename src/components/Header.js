const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={require("../../logo.png")} />
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
  export default Header;