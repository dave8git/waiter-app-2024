import shortid from 'shortid';
import { updateTables } from './redux/tableRedux';
import thunk from 'redux-thunk';

// selectors 

// action names
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators 
export const updateTables = payload => ({type: UPDATE_TABLES, payload});

const fetchTables = () => { 
    return (dispatch) => {
        fetch('http://localhost:3131/api/books')
        .then(res => res.json())
        .then(tables => dispatch(updateTables(tables)));
    }
  };

  //useEffect(tables, [dispatch]);

export const addTableRequest = () => {
    return (dispatch) => {
        return (dispatch) => {
            const options ={
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(???),
            };

            fetch ('http://localhost:3131/api/tables', options) // nie wiem czy tu ma być api table czy tylko tables
                .then(() => dispatch(addBook(???)))
        }
    }
}

const reducer = (statePart = [], action) => {
    switch(action.type) {
        case UPDATE_TABLES: 
            return [...action.payload]
        default: 
            return statePart
    }
};

export default reducer; 
