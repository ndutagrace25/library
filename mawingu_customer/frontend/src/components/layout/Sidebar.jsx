import React, { Component } from "react";
import ContentSpace from "./ContentSpace";
class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link">
                    <i className="fa fa-cogs" aria-hidden="true" />
                    <span className="right-nav-text" />
                    Administration
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <i className="fa fa-users" aria-hidden="true" />
                    <span className="right-nav-text" />
                    Customers
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <ContentSpace />
        </div>
      </div>
    );
  }
}

export default Sidebar;
