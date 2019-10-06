import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Edit extends Component {
    state = {
        movieEdit: {
            newTitle: '',
            newDescription: '',
            id: this.props.match.params.id
        }
    }

    handleChange = (event, propertyName) => {
        this.setState({
            movieEdit: {
                ...this.state.movieEdit,
                [propertyName]: event.target.value,
            }
        })
    }

    handleDetails = () => {
        this.props.history.push(`/movies/${this.props.match.params.id}`)
    }

    handleSave = () => {
        this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.movieEdit });
        this.handleDetails();
        // this.props.history.push(`/movies/${this.state.movieEdit.id}`);
        // this.props.history.push(`/movies/${this.props.match.params.id}`);
    }

    refreshPage = () => {
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                {this.props.reduxState.singleMovieInfo.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <h1>Title</h1>
                            <input onChange={(event) => this.handleChange(event, 'newTitle')} defaultValue={movie.title}></input>
                            <h2>Description</h2>
                            <textarea onChange={(event) => this.handleChange(event, 'newDescription')} defaultValue={movie.description}></textarea>
                        </div>
                    )
                })}
                <br />
                <button onClick={this.handleDetails}>Cancel</button><br />
                <button onClick={this.handleSave}>Save Changes</button>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(Edit));