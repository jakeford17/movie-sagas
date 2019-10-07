import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          {/* Header below will display on all pages */}
          <header className="App-header">
            <span className="headerH1">MOVIE LIST</span>
          </header>
          {/* Content div used to change body of the pages */}
          <div className="content">
            <br />
            {/* Routing using match objects, which contains information about how a <Route path> matched the URL. */}
            {/* Will use params (object with movie's ID) to go to dynamically go to a movie's Details or Edit page */}
            <Route path="/" exact component={Home} />
            <Route path='/details/:id' render={({ match }) => <Details match={match} />} />
            <Route path='/edit/:id' render={({ match }) => <Edit match={match} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
