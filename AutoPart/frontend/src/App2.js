import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';
import RegisterPage from './components/auth/Register';
import LoginPage from './components/auth/Login';
import HomePage from './components/home';

class App2 extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>

            <Route exact path="/register">
              <RegisterPage />
            </Route>

            <Route exact path="/Login">
              <LoginPage />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App2;
