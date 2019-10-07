import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router'

class MovieList extends Component {
    // Function that runs on page load, eventually triggering the rendering of movies list
    componentDidMount() {
        this.getMovies();
    }

    // Function that runs on page load that dipatches to GET generator function
    // This will put movies in movies reducer, which is accessed below
    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    // Function takes a movie's ID and re-directs to /details page with the movie's id number
    details = (movie) => {
        this.props.history.push(`/details/${movie.id}`)
        this.props.dispatch({ type: 'SEPARATE_MOVIE', payload: movie });
    }

    render() {
        // Mapping through movies reducer to make rows with movie posters/info to display in table on DOM
        let movies = this.props.reduxState.movies.map((movieItem) => {
            return (
                <tr key={movieItem.id}>
                    <td>
                        <img className="posterElement" onClick={() => this.details(movieItem)} src={movieItem.poster} alt={movieItem.title} />
                    </td>
                    <td className="movieTitle">
                        <h2>{movieItem.title}</h2>
                        <p className="movieInfo">{movieItem.description}</p>
                    </td>
                </tr>
            )
        })
        return (
            <Router>
                <div>
                    <table>
                        <tbody>
                            {movies}
                        </tbody>
                    </table>
                </div>
            </Router>
        )
    }
}

// Makes our reducers available in our component
const mapStateToProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(mapStateToProps)(MovieList));