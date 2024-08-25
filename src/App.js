import { Container } from "react-bootstrap";
import { tables, updateTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { fetchTables } from './redux/tablesRedux';
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <h1>Hey! Hello in waiter-app 2024!</h1>
    </Container>
  );
}

export default App;
