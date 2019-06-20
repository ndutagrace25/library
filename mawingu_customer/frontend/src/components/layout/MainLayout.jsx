import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

class MainLayout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Sidebar />
      </React.Fragment>
    );
  }
}

export default MainLayout;
