import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList.js';
import {HashRouter as Router} from 'react-router-dom';

class Home extends Component {
    // Home page (set by Router/Route path in App.js) that renders the movie list
    render() {
        return (
            <Router>
                <MovieList/>
            </Router>
        );
    }
}

export default Home;