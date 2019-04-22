import React, { Component } from "react";
//import githublogo from "./public/githublogo.jpg";
class Header extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={githublogo} className="App-logo" alt="logo" />
        </header> */}
        <h1>Github User Finder</h1>
      </div>
    );
  }
}

export default Header;
