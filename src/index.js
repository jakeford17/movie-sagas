import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
// Setting up Sagas
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('SET_DETAILS', setMovieDetail);
    yield takeEvery('UPDATE_MOVIE', updateMovie);
}

function* updateMovie(action) {
    try {
        yield axios.put('/movies', action.payload);
    } catch (error) {
        console.log('error while updating movie', error)
    }
}

function* fetchMovies() {
    try {
        const response = yield axios.get('/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log('error while fetching movies', error)
    }
}

function* setMovieDetail(action) {
    try {
        const response = yield axios.get('/movies/details/' + action.payload);
        yield put({ type: 'ONE_MOVIE_INFO', payload: response.data })
    } catch (err) {
        console.log(err);
    }
}

function* fetchGenres(action) {
    try {
        const response = yield axios.get('/movies/genres/' + action.payload);
        yield put({ type: 'SET_GENRES', payload: response.data })
    } catch (err) {
        console.log(err);
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const singleMovieInfo = (state = [], action) => {
    switch (action.type) {
        case 'ONE_MOVIE_INFO':
            return action.payload
        default:
            return state
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        singleMovieInfo,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
