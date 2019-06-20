import React, { Component } from "react";
import Tasks from "../Tasks";
class ContentSpace extends Component {
  state = {};
  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <div className="table-responsive">
            <Tasks />
          </div>
        </div>
      </main>
    );
  }
}

export default ContentSpace;
