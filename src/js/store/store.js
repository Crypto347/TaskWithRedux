import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import todos from '../reducers/todo.reducer';
import show from '../reducers/show.reducer'

import logger from 'redux-logger';

const reducers = combineReducers({// sozdaem constantu reducers kotora sobiraet vse reducery i peredaet ix v createStore odnoy funksiyey
    todos: todos,
    show: show
});

export default createStore(reducers, applyMiddleware(logger));//zabila posmotret v inete 4to zna4it applyMiddleware i logger.A sey4as uje ustala. posmotru potom :-)
