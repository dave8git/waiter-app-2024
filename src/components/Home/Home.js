import { useSelector, useDispatch } from 'react-redux';
import { fetchTables } from "../../redux/tablesRedux";
import { useEffect } from "react";
import TableInfo from "../TableInfo/TableInfo";


function Home() {
    const tables = useSelector(state => state.tables);

    return (
        <>
            <h1>Hey! Hello in waiter-app 2024!</h1>
            {tables.map(table => (<TableInfo {...table} />))}
        </>
    );
}

export default Home;