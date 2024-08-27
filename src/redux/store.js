import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesRedux from './tablesRedux';

const subreducers = {
    tables: tablesRedux,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,

  compose( // funkcja compose pozwala połączyć kilka middlewarów, wcześniej nie stosowałem bo był jeden middleware window.__...
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;