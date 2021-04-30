/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './AlphabetCard.scss';

const AlphabetCard = ({ alphabet, distros }) => (
  <Col md={4} className="d-flex justify-content-center align-items-center">
    <Card
      className="card text-center alphabet-card"
    >
      <Card.Body className="alphabet-card-body">
        <Card.Title className="text-center card-title">
          {alphabet}
        </Card.Title>
        <a href="/">
          {distros.map((distro) => <div>{distro}</div>)}
        </a>
      </Card.Body>
    </Card>
  </Col>
);

export default AlphabetCard;
