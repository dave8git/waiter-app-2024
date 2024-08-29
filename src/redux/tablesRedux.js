import shortid from 'shortid';
import thunk from 'redux-thunk';

// selectors 
export function getTable(state, tableId) {
    console.log('state', state);
    console.log('tableId', tableId);
    return state.tables.find(table => table.id === parseInt(tableId));
};

// action names
const createActionName = name => `app/tables/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators 
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });



export const fetchTables = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
            .then(res => res.json())
            .then(tables => dispatch(updateTables(tables)))
            .then(tables => console.log('tables...', tables));
    }
};

//useEffect(tables, [dispatch]);

export const addTableRequest = () => {
    return (dispatch) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({}),
        };

        fetch('http://localhost:3131/api/tables', options) // ma być zawsze tables, nawet gdyby dane jednego stolika były pobierane to (...)/tables/tableId
            .then(() => dispatch())
    }
}

const reducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TABLES:
            console.log('update tables runs once');
            console.log(action.payload);
            return [...action.payload]
        // return []
        default:
            return statePart
    }
};

export default reducer; 
