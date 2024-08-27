import { Container } from "react-bootstrap";
import { tables, updateTables } from './redux/tablesRedux';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTables } from './redux/tablesRedux';
import { useEffect } from "react";
import TableInfo from "./components/tableInfo";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import TableForm from "./components/tableForm";

function App() {

  return (
    <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/:tableId" element={<TableForm />} />
        </Routes>
    </Container>
  );
}


export default App;
