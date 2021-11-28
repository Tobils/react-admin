import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            simpan.praktis
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Copyright © 2021. All rights reserved.
          </span>
        </div>
      </footer>
    );
  }
}
