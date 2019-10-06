import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'


class Details extends Component {
    componentDidMount() {
        this.id();
        this.genreId();
    }

    id = () => {
        this.props.dispatch({ type: 'SET_DETAILS', payload: this.props.match.params.id })
    }

    genreId = () => {
        this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.match.params.id })
    }

    backClick = () => {
        this.props.history.push('/');
    }

    editClick = () => {
        this.props.history.push(`/edit/${this.props.match.params.id}`);
    }

    render() {
        const genres = this.props.reduxState.genres.map((genre) => {
            return (
                <span className="genreListItem" key={genre.id}>{genre.name}<br /></span>
            )
        });
        return (
            <Router>
                <div>
                    <div>
                        <h2>MOVIE DETAILS</h2>
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

                    {/* <ul>
                        Genres:
                        {genres}
                    </ul> */}
                    <button onClick={this.backClick}>Back</button>
                    <button onClick={this.editClick}>Edit</button>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(Details));