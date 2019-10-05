import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'


class Details extends Component {
    componentDidMount() {
        this.id()
    }

    id = () => {
        console.log(this.props.match.params.id)
        this.props.dispatch({ type: 'SET_DETAILS', payload: this.props.match.params.id })
    }

    // handleClick=()=>{
    //     this.props.history.push('/');
    // }
    // edit = () =>{
    //     this.props.history.push(`/edit/${this.props.match.params.id}`);
    // }
    render() {
        return (
            <Router>
                <div>
                    {/* <button onClick={this.handleClick}>Back</button> */}
                    {/* <button onClick={this.edit}>Edit</button> */}
                    {this.props.reduxState.genres.map((movie) => {
                        return (
                            <li key={movie.id}>
                                <p>Title: {movie.title}</p>
                                <p>{movie.description}</p>
                                <p>Genre: {movie.name}</p>
                            </li>
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