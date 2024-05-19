import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';
import { Button, Container, Row, Col } from 'react-bootstrap';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>{count}</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button variant="primary" onClick={() => dispatch(increment())} className="me-2">
            Increment
          </Button>
          <Button variant="danger" onClick={() => dispatch(decrement())} className="me-2">
            Decrement
          </Button>
          <Button variant="success" onClick={() => dispatch(incrementByAmount(2))}>
            Increment by 2
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
