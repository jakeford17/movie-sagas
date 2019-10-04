import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class MovieList extends Component {
    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    render() {
        let movies = this.props.reduxState.movies.map((movieItem, id) => {
        return (
            <div key = {id}>
                <img src={movieItem.poster}/>
                <h2>{movieItem.title}</h2>
                <p>{movieItem.description}</p>                  
            </div>
        )})
        return (
            <div>
                {movies}
            </div>
        )
    }
}


// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);