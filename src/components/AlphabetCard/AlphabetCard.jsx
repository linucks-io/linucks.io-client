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
          <u>
            {alphabet}

          </u>
        </Card.Title>
        {distros.map((distro) => <div><a className="distro-names" href={`/distro/${distro}`}>{distro}</a></div>)}
      </Card.Body>
    </Card>
  </Col>
);

export default AlphabetCard;
