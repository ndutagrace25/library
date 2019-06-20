import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginPersonnel } from "../../actions/authActions";
import LoginTextFieldGroup from "../common/LoginTextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/tasks");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const personnel = {
      phone: this.state.phone,
      password: this.state.password
    };

    this.props.loginPersonnel(personnel, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="d-flex justify-content-center login-container h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center center">
              <div>
                <img
                  src={require("../../assets/img/mawingu.png")}
                  style={{
                    width: "50%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "10%"
                  }}
                  alt=""
                />
                <label
                  className="d-flex justify-content-center center"
                  style={{ marginBottom: "5%" }}
                >
                  Admin Login
                </label>
              </div>
            </div>
            <div>
              <form noValidate onSubmit={this.onSubmit}>
                <div style={{ marginBottom: "20px" }}>
                  <LoginTextFieldGroup
                    icon="fa fa-phone"
                    type="phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                    id="phone"
                    error={errors.phone}
                    placeholder="Enter your phone"
                    style={{ padding: "10px", fontSize: "17px" }}
                  />
                </div>

                <div>
                  <LoginTextFieldGroup
                    icon="fa fa-lock"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    id="password"
                    error={errors.password}
                    placeholder="Enter your password"
                    style={{ padding: "10px", fontSize: "17px" }}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn login_btn"
                    style={{
                      marginTop: "18px",
                      padding: "10px",
                      marginBottom: "5px",
                      fontSize: "20px"
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginPersonnel: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { loginPersonnel }
)(withRouter(Login));
