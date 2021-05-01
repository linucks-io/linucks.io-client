import React from 'react';
import {
  Form, Col, Button, Row,
} from 'react-bootstrap';

const SearchBox = () => (
  <Form>
    <Row className="d-flex">
      <Col sm={8}>
        <Form.Control id="inlineFormInputName" placeholder="Distro name" className="bg-dark color-white" />
      </Col>
      <Col>
        <Button className="mt-0">Search</Button>
      </Col>
    </Row>
  </Form>
);

export default SearchBox;
