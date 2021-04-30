import React from 'react';
import {
  Form, Col, Button,
} from 'react-bootstrap';

const SearchBox = () => (
  <Form>
    <Form.Row className="align-items-center">
      <Col sm={8} className="my-1">
        <Form.Label htmlFor="inlineFormInputName" srOnly>
          Name
        </Form.Label>
        <Form.Control id="inlineFormInputName" placeholder="Distro name" />
      </Col>
      <Col xs="auto" className="my-1">
        <Button>Search</Button>
      </Col>
    </Form.Row>
  </Form>
);

export default SearchBox;
