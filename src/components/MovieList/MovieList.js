import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router'
// import axios from 'axios';

class MovieList extends Component {
    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    details = (id) => {
        this.props.history.push(`/movies/${id}`)
    }

    render() {
        let movies = this.props.reduxState.movies.map((movieItem) => {
            return (
                <tr key={movieItem.id}>
                    <td>
                        <img onClick={() => this.details(movieItem.id)} src={movieItem.poster} alt={movieItem.title} />
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