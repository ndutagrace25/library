import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utilities/setAuthToken';
import {setCurrentUser} from './actions/authActions';

import { Provider } from "react-redux";
import store from "./store";

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LoginPage from "./components/LoginPage";
import MainLayout from "./components/layout/MainLayout";

//check for token
if(localStorage.jwtToken){
    //set auth token header auth
    setAuthToken(localStorage.jwtToken);
    //decodetoken and user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    //set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/admin" component={LoginPage} />
              <Route exact path="/tasks" component={MainLayout} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
