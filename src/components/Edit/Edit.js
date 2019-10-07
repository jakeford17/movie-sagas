import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Edit extends Component {
    // Setting up a state that will be eventuallt be sent to PUT request in Redux Store
    state = {
        movieEdit: {
            newTitle: '',
            newDescription: '',
            id: this.props.match.params.id
        }
    }

    // Changes the values of movie's title/description base on user input
    handleChange = (event, propertyName) => {
        this.setState({
            movieEdit: {
                ...this.state.movieEdit,
                [propertyName]: event.target.value,
            }
        })
    }

    // Function that sends the user back to this movie's Details page
    // Will eventually run whether the user clicks Save or Back
    handleDetails = () => {
        this.props.history.push(`/details/${this.props.match.params.id}`)
    }

    // Dipatches state with new movie details to Redux Store in order to make PUT
    handleSave = () => {
        this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.movieEdit });
        this.handleDetails();
    }

    render() {
        return (
            <div>
                {this.props.reduxState.singleMovieInfo.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <h2>EDIT MOVIE</h2>
                            <h2>Title</h2>
                            {/* Input for Title populated with movie's current title */}
                            <input className="editInput" onChange={(event) => this.handleChange(event, 'newTitle')} defaultValue={movie.title}></input>
                            <h2>Description</h2>
                            {/* Textarea with description populated with movie's current description */}
                            <textarea className="editTextarea" onChange={(event) => this.handleChange(event, 'newDescription')} defaultValue={movie.description}></textarea>
                        </div>
                    )
                })}
                <br />
                {/* Buttons that will send user Back to Details page (Save will save updates first) */}
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