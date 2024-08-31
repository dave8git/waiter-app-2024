import shortid from 'shortid';
import thunk from 'redux-thunk';

// selectors 
export function getTable(state, tableId) {
    const table = state.tables.find(table => table.id == tableId);
    return table;
};

// action names
const createActionName = name => `app/tables/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators 
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });



export const fetchTables = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
            .then(res => res.json())
            .then(tables => dispatch(updateTables(tables)))
            .then(tables => console.log('tables...', tables));
    }
};

//useEffect(tables, [dispatch]);

export const editTableRequest = (tableData) => {
    return (dispatch) => {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tableData),
        };

        fetch(`http://localhost:3131/api/tables/${tableData.id}`, options) // ma być zawsze tables, nawet gdyby dane jednego stolika były pobierane to (...)/tables/tableId
            .then(res => res.json())
            .then(updatedTable => {
                dispatch(editTable(updateTables));
            })
            .catch(error => console.error('Error updating table:', error));
    }
}

const reducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TABLES:
            return [...action.payload]
        // return []
        case EDIT_TABLE: 
            console.log('action.payload', action.payload);
            return statePart.map(table => (table.id === action.payload.id ? {...table, ...action.payload } : table));
        default:
            return statePart
    }
};

export default reducer; 
