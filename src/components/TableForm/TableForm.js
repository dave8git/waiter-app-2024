import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTableRequest } from '../../redux/tablesRedux';
import { useParams } from 'react-router-dom';
import { Form, Row, Card, Col, DropdownButton, Dropdown, InputGroup, Button } from 'react-bootstrap';
import styles from './TableForm.module.scss';
import { getTable } from '../../redux/tablesRedux';

const TableForm = ({ }) => {
    const [status, setStatus] = useState('');
    const [people, setPeople] = useState('');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState('');
    const [bill, setBill] = useState('');

    const { tableId } = useParams();

    const dispatch = useDispatch(); 

    const tables = useSelector(state => getTable(state, tableId));

    console.log('book', tables);
    const peopleCount = useSelector(state => state.peopleCount);

    console.log(tableId);
    const handleUpdate = () => {
        // console.log({ status, person, bill, peopleCount });
    }

    return (
        <>
            <div>Table: ${tableId}</div>
            <Form>
                <Row className="mb-2">
                    <Col xs={1}>
                        <Form.Label className="pt-1"><Card.Title>Status:</Card.Title></Form.Label>
                    </Col>
                    <Col xs={3}>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                    </Col>
                </Row>
                <Row className="align-items-center mb-2">
                    <Col xs="auto">
                        <Form.Label><Card.Title>People:</Card.Title></Form.Label>
                    </Col>
                    <Col xs="auto" className="px-0" style={{ width: '40px' }}>
                        <Form.Control

                        />
                    </Col>
                    <Col xs="auto" className="d-flex align-items-center">
                        <span className="px-0">/</span>
                    </Col>
                    <Col xs="auto" className="px-0" style={{ width: '40px' }}>
                        <Form.Control

                        // className="form-control-sm" 
                        // type="number" 
                        // placeholder="max" 
                        />
                    </Col>
                </Row>
                <Row className="align-items-center mb-2">
                    <Col xs="auto" className="me-4">
                        <Form.Label><Card.Title>Bill:</Card.Title></Form.Label>
                    </Col>
                    <Col xs="auto" className="d-flex align-items-center pt-2">
                        <span className="mb-2 pr-0">$</span> 
                    </Col>
                    <Col xs="auto" className="px-0" style={{ width: '40px' }}>
                        <Form.Control

                        // className="form-control-sm" 
                        // type="number" 
                        // placeholder="max" 
                        />
                    </Col>
                </Row>


                <Button variant="primary" onClick={handleUpdate}>
                    Update
                </Button>
            </Form>
        </>
    )
}

export default TableForm;