import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';


class Navbar extends Component {
  render() {
      const {isAuthenticated, personnel} = this.props.auth;
       
    return (
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <a className="navbar-brand">
          <img
            className="brand-img"
            src="https://mpesa.mawingunetworks.com/assets/uploads/mawingu.png"
            alt="Mawingu Networks Limited"
            class="img-fluid"
            width="40px"
          />
          Mawingu
        </a>
        
      </nav>
    );
  }
}

Navbar.PropTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Navbar);
