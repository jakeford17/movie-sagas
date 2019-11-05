import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList.js';

class Home extends Component {
    // Home page (set by Router/Route path in App.js) that renders the movie list
    render() {
        return (
            <MovieList />
        );
    }
}

export default Home;