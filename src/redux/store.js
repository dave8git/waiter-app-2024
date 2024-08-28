import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesRedux from './tablesRedux';

const subreducers = {
    tables: tablesRedux,
}

const initialState = {
    tables: [
        {
            "tables": [
              {
                "id": 1,
                "status": "Reserved",
                "peopleAmount": "2",
                "maxPeopleAmount": "4",
                "bill": "28",
                "people": "2",
                "maxPeople": "4"
              },
              {
                "id": 2,
                "status": "Busy",
                "peopleAmount": 0,
                "maxPeopleAmount": 3,
                "bill": "118",
                "people": "5",
                "maxPeople": 6
              },
              {
                "id": 3,
                "status": "Busy",
                "peopleAmount": 2,
                "maxPeopleAmount": 3,
                "bill": 45
              },
              {
                "id": 4,
                "status": "Cleaning",
                "peopleAmount": 0,
                "maxPeopleAmount": 3,
                "bill": 0,
                "people": 0,
                "maxPeople": 3
              }
            ]
          }
    ]
};

const store = createStore(
  reducer,
  initialState,

  compose( // funkcja compose pozwala połączyć kilka middlewarów, wcześniej nie stosowałem bo był jeden middleware window.__...
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
