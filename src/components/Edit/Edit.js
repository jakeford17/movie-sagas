import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

class Edit extends Component {
    state = {
        movieEdit: {
            newTitle: '',
            newDescription: ''
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

    handleCancel = () =>{
        this.props.history.push(`/movies/${this.props.match.params.id}`)
    }

    handleSave = () =>{
        // this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.movieEdit })
        this.props.history.push(`/movies/${this.props.match.params.id}`)
    }

    render() {
        return (
            <div>
                <p>Title:</p>
                <input onChange = {(event) => this.handleChange(event, 'newTitle')} value = {this.state.movieEdit.newTitle}></input>
                <br/>
                <p>Description:</p>
                <textarea onChange = {(event) => this.handleChange(event, 'newDescription')} value = {this.state.movieEdit.newDescription}></textarea>
                <br/><br/>
                <button onClick = {this.handleCancel}>Cancel</button><br/>
                <button onClick = {this.handleSave}>Save Changes</button>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(Edit));