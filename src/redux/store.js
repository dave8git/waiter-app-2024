import { createStore } from 'redux';

const reducer = (state, action) => {
    return state;
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
    window.__REDUX_DEVTOOLS_EXTENSION_&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store; 