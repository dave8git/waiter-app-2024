import React from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TableInfo = ({ id, status, people, maxPeopleAmount, bill }) => {

  const navigate = useNavigate(); 
  
  const onButtonClick = () => {
    navigate(`/form/${id}`);
  }

  return (
    <Row className="align-items-center p-3 border rounded bg-light shadow-sm">
    <Col xs={3}>
      <h5>
        <Badge bg={status === 'Occupied' ? 'danger' : 'success'}>{status}</Badge>
      </h5>
    </Col>
    <Col xs={2} className="text-center">
      <strong>People:</strong> {people}
    </Col>
    <Col xs={3} className="text-center">
      <strong>Max Capacity:</strong> {maxPeopleAmount}
    </Col>
    <Col xs={2} className="text-end">
      {bill && <strong>Bill:</strong>} {bill && `$${bill.toFixed(2)}`}
    </Col>
    <Col xs={2} className="text-end">
      <Button variant="primary" onClick={onButtonClick}>
        Edit table!
      </Button>
    </Col>
  </Row>
  )
}



export default TableInfo;