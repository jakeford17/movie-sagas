import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
        <h1>Movie List</h1>
        </header>
        <br/>
        <Route path="/" exact component={Home} />
        <Route path='/movies/:id' render={({match})=><Details match={match}/>}/>
        <Route path='/edit/:id' render={({match})=><Edit match={match}/>}/>
      </div>
      </Router>
    );
  }
}

export default App;
