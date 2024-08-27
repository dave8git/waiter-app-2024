import { useSelector, useDispatch } from 'react-redux';
import { fetchTables } from "../redux/tablesRedux";
import { useEffect } from "react";
import TableInfo from "../components/tableInfo";


function Home() {
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchTables()), [dispatch]);

    const tables = useSelector(state => state.tables);

    return (
        <>
            <h1>Hey! Hello in waiter-app 2024!</h1>
            {tables.map(table => (<TableInfo {...table} />))}
        </>
    );
}

export default Home;