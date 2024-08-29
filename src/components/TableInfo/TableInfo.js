import React from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TableInfo = ({ id, status, people, maxPeople, bill }) => {

  const navigate = useNavigate(); 
  
  const onButtonClick = () => {
    navigate(`/form/${id}`);
  }

  const getBadgeColor = (status) => {
    console.log(status);
    switch (status) {
      case 'Busy':
        return 'danger';
      case 'Reserved':
        return 'warning';
      case 'Cleaning':
        return 'info';
      case 'Free': 
        return 'success';
    }
  }

  return (
    <Row className="align-items-center p-3 border rounded bg-light shadow-sm">
    <Col xs={3}>
      <h5>
        <Badge bg={getBadgeColor(status)}>{status}</Badge>
      </h5>
    </Col>
    <Col xs={2} className="text-center">
      <strong>People:</strong> {people}
    </Col>
    <Col xs={3} className="text-center">
      <strong>Max Capacity:</strong> {maxPeople}
    </Col>
    <Col xs={2} className="text-end">
      {bill !== 0 && <strong>Bill:</strong>} {bill && `$${bill.toFixed(2)}`}
    </Col>
    <Col xs={2} className="text-end">
      <Button variant="primary" onClick={onButtonClick}>
        Edit table
      </Button>
    </Col>
  </Row>
  )
}



export default TableInfo;