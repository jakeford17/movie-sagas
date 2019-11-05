import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Details extends Component {
    // Function that runs on page load, eventually making our movie details and genres available
    componentDidMount() {
        this.getAllInfo();
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userID !== prevProps.userID) {
            this.props.dispatch({ type: 'SET_DETAILS', payload: this.props.match.params.id })
        }
    }

    // Dispatching to store to all us to access our singleMovieInfo and genres reducers
    getAllInfo = () => {
        this.props.dispatch({ type: 'SET_DETAILS', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.match.params.id })
    }

    // Function triggered by clicking Back that brings user back to Home/list of movies
    backClick = () => {
        this.props.history.push('/');
    }

    // Function takes a movie's ID and re-directs to /edit page with the movie's id number 
    editClick = () => {
        this.props.history.push(`/edit/${this.props.match.params.id}`);
    }

    render() {
        // Grabbing genre(s) from genre reducer to display on page
        const genres = this.props.reduxState.genres.map((genre) => {
            return (
                <span className="genreListItem" key={genre.id}>{genre.name}<br /></span>
            )
        });
        return (
            <div>
                <div>
                    <h2>MOVIE DETAILS</h2>
                    {/* Mapping through the reducer that only contains info for movie with specific ID*/}
                    {/* Displaying movie title and description */}
                    {this.props.reduxState.singleMovieInfo.map((movie) => {
                        return (
                            <p key={movie.id}>
                                <h1>{movie.title}</h1>
                                <span>{movie.description}</span>
                                <br /><br />
                                <span><h2>GENRES:</h2>
                                    {genres}
                                </span>
                            </p>
                        )
                    })}
                </div>
                {/* Buttons that trigger functions that bring user to Home or Edit page */}
                <button onClick={this.backClick}>Back</button><br />
                <button onClick={this.editClick}>Edit</button>
            </div>
        )
    }
}

// Makes our reducers available in our component
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(Details));