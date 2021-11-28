import React, { Component } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default class Layout extends Component {
  render() {
    return (
      <div className="container-scroller">
        <Nav />

        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper"></div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
