import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTableRequest } from '../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const TableForm = ({ }) => {
    const [status, setStatus] = useState('');
    const [person, setPerson] = useState('');
    const [bill, setBill] = useState('');

    const {tableId} = useParams(); 
    const peopleCount = useSelector(state => state.peopleCount);

    console.log(tableId);
    const handleUpdate = () => {
        console.log({ status, person, bill, peopleCount });
    }

    return (
        <div>Table: ${tableId}</div>
        // <Form>
        //     <Form.Group as={Row} controlId="formStatus">
        //         <Form.Label column sm="2">
        //             Status
        //         </Form.Label>
        //         <Col sm="10">
        //             <DropdownButton
        //                 variant="outline-secondary"
        //                 title={status}
        //                 onSelect={(e) => setStatus(e)}
        //             >
        //                 <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
        //                 <Dropdown.Item eventKey="In Progress">In Progress</Dropdown.Item>
        //                 <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
        //             </DropdownButton>
        //         </Col>
        //     </Form.Group>

        //     <Form.Group as={Row} controlId="formPeople">
        //         <Form.Label column sm="2">
        //             People
        //         </Form.Label>
        //         <Col sm="5">
        //             <Form.Control
        //                 type="text"
        //                 placeholder="Enter person name"
        //                 value={person}
        //                 onChange={(e) => setPerson(e.target.value)}
        //             />
        //         </Col>
        //         <Col sm="5">
        //             <InputGroup>
        //                 <InputGroup.Text>Count</InputGroup.Text>
        //                 <Form.Control
        //                     type="text"
        //                     readOnly
        //                     value={peopleCount}
        //                 />
        //             </InputGroup>
        //         </Col>
        //     </Form.Group>

        //     <Form.Group as={Row} controlId="formBill">
        //         <Form.Label column sm="2">
        //             Bill
        //         </Form.Label>
        //         <Col sm="10">
        //             <Form.Control
        //                 type="text"
        //                 placeholder="Enter bill amount"
        //                 value={bill}
        //                 onChange={(e) => setBill(e.target.value)}
        //             />
        //         </Col>
        //     </Form.Group>

        //     <Button variant="primary" onClick={handleUpdate}>
        //         Update
        //     </Button>
        // </Form>
    )
}

export default TableForm;