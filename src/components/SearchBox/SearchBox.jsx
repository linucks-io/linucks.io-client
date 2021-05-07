import React from 'react';
import {
  Form, Col, Button, Row,
} from 'react-bootstrap';
import './SearchBox.scss';

const SearchBox = () => (
  <Form className="form">
    <Row className="d-flex justify-content-center">
      <Col>
        <Form.Control placeholder="Distro name" className="bg-dark color-white" />
      </Col>
      <Col>
        <Button className="search-btn">Search</Button>
      </Col>
    </Row>
  </Form>
);

export default SearchBox;
