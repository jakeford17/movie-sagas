import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'


class Details extends Component {
    componentDidMount() {
        this.id();
        this.genreId();
    }

    id = () => {
        console.log(this.props.match.params.id)
        this.props.dispatch({ type: 'SET_DETAILS', payload: this.props.match.params.id })
    }

    genreId = () => {
        console.log(this.props.match.params.id)
        this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.match.params.id })
    }

    backClick=()=>{
        this.props.history.push('/');
    }

    editClick = () =>{
        console.log("EDIT BUTTON CLICKED");
        this.props.history.push(`/edit/${this.props.match.params.id}`);
    }

    render() {
        const genres = this.props.reduxState.genres.map((genre) => {
            return (
                <li key={genre.id}>{genre.name}</li>
            )
        });
        return (
            <Router>
                <div>
                    <div>
                    <h2>MOVIE DETAILS</h2>
                    <button onClick={this.backClick}>Back</button>
                    <button onClick={this.editClick}>Edit</button>
                    {this.props.reduxState.singleMovieInfo.map((movie) => {
                        return (
                            <p key={movie.id}>
                                <h1>{movie.title}</h1>
                                <span>{movie.description}</span>
                            </p>
                        )
                    })}
                    </div>

                    <ul>
                        Genres:
                        {genres}
                    </ul>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(Details));