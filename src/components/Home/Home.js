import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList.js';
import {HashRouter as Router, Link} from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <Router>
                <MovieList/>
            </Router>
        );
    }
}

export default Home;