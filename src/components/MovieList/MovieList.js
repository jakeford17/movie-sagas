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
            <tr key = {id}>
                <td>
                    <img src={movieItem.poster} alt={movieItem.title}/>
                </td>
                <td className="movieTitle">
                <h2>{movieItem.title}</h2>
                <p className="movieInfo">{movieItem.description}</p>
                </td>             
            </tr>
        )})
        return (
            <div>
                <table>
                    <tbody>
                        {movies}
                    </tbody>
                </table>
            </div>
        )
    }
}


// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);