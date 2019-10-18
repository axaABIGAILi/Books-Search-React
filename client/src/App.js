import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {Header, Jumbotron, SavedBooks, Results} from './components/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Jumbotron />
        
        <Switch>
          <Route exact path="/" component={Results} />
          <Route exact path="/saved" component={SavedBooks} />
        </Switch>
      </Router>
    );
  }
}

export default App;
