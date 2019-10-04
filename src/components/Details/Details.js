import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'


class Details extends Component {
    state = {
        movie: []
    }
    componentDidMount() {
        this.id()
    }

    id = () => {
        console.log(this.props.match.params.id)
        this.props.dispatch({ type: 'SET_DETAILS', payload: this.props.match.params.id })
    }

    handleClick=()=>{
        this.props.history.push('/');
    }
    // edit = () =>{
    //     this.props.history.push(`/edit/${this.props.match.params.id}`);
    // }
    render() {
        return (
            <Router>
                <div>
                    <h2>MOVIE DETAILS</h2>
                    <button onClick={this.handleClick}>Back</button>
                    {/* <button onClick={this.edit}>Edit</button> */}
                    {this.props.reduxState.singleMovieInfo.map((movie) => {
                        return (
                            <p key={movie.id}>
                                <h1>{movie.title}</h1>
                                <span>{movie.description}</span>
                            </p>
                        )
                    })}
                </div>
            </Router>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(Details));