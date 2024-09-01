import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTableRequest } from '../../redux/tablesRedux';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Row, Card, Col, DropdownButton, Dropdown, InputGroup, Button } from 'react-bootstrap';
import styles from './TableForm.module.scss';
import { getTable } from '../../redux/tablesRedux';
import { editTableRequest } from '../../redux/tablesRedux';

const TableForm = ({ }) => {
    const [status, setStatus] = useState('');
    const [people, setPeople] = useState('');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState('');
    const [bill, setBill] = useState('');

    const { tableId } = useParams();

    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault(); 
        console.log('status', status);
        let updatedPeople = people; 
        let updatedBill = bill; 
       
        if(status == 'Free' || status == 'Cleaning') {
            updatedPeople = 0;
            updatedBill = 0;
        }
        if(people >= maxPeopleAmount) {
            updatedPeople = maxPeopleAmount;
        }
        dispatch(editTableRequest({
            id: tableId, 
            status, 
            people: updatedPeople, 
            maxPeople: maxPeopleAmount,
            bill: updatedBill, 
        }));
        navigate('/')
        // console.log({ status, person, bill, peopleCount });
    }

    const table = useSelector(state => getTable(state, tableId));
    console.log('table 2', table);

    useEffect(() => {
        if (table) {
            setStatus(table.status || '');
            setPeople(table.people || '');
            setMaxPeopleAmount(table.maxPeople || '');
            setBill(table.bill || '');
        }
    }, [table]);


    if (!table) {
        return <div>Loading...</div>; // Show a loading indicator or a placeholder
    }

    return (
        <>
            <div>Table: ${tableId}</div>
            <Form onSubmit={handleUpdate}>
                <Row className="mb-2">
                    <Col xs={1}>
                        <Form.Label className="pt-1"><Card.Title>Status:</Card.Title></Form.Label>
                    </Col>
                    <Col xs={3}>
                        <Form.Select 
                            aria-label="Default select example"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            <option>Open this select menu</option>
                            <option value="Reserved">Reserved</option>
                            <option value="Free">Free</option>
                            <option value="Busy">Busy</option>
                            <option value="Cleaning">Cleaning</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="align-items-center mb-2">
                    <Col xs="auto">
                        <Form.Label><Card.Title>People:</Card.Title></Form.Label>
                    </Col>
                    <Col xs="auto" className="px-0" style={{ width: '40px' }}>
                        <Form.Control
                             className="form-control-sm" 
                             type="number" 
                             value={people}    
                             placeholder="people" 
                             onChange={e => setPeople(e.target.value)}
                        />
                    </Col>
                    <Col xs="auto" className="d-flex align-items-center">
                        <span className="px-0">/</span>
                    </Col>
                    <Col xs="auto" className="px-0" style={{ width: '40px' }}>
                        <Form.Control

                        className="form-control-sm" 
                        type="number" 
                        value={maxPeopleAmount}    
                        placeholder="max" 
                        onChange={e => setMaxPeopleAmount(e.target.value)}
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
                        className="form-control-sm" 
                        type="number" 
                        value={bill}
                        placeholder="amount" 
                        onChange={e => setBill(e.target.value)}
                        />
                    </Col>
                </Row>


                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </>
    )
}

export default TableForm;