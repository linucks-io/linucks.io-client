import React from 'react';
import './LandingPage.scss';
import { Button, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/logo.png';
import Tick from '../../assets/icons/tick.svg';

const LandingPage = () => (
  <>
    <Row className="d-flex-row justify-content-around p-5">
      <img src={Logo} alt="logo" className="logo" />
      <Button>Test me</Button>
    </Row>
    <Row className="d-flex-row justify-content-around">
      <div>
        <div>
          <h1>Test Linux distros in your browser</h1>
        </div>
        <br />
        <div className="text-center">
          <h5>No installations, no long waiting times, its an</h5>
          <h5>operating system in your browser</h5>
          <br />
          <p>With linucks.io you can yuck out all the bad distros</p>
        </div>
      </div>
    </Row>
    <Row className="carousel" />
    <Row className="d-flex-row justify-content-around text-center">
      <div>
        <h1>Choose from a variety of distros</h1>
        <h1>and test it directly</h1>
      </div>
    </Row>
    <div className="d-flex w-100 justify-content-around">
      <Row className="d-flex-row text-center pt-5 w-50">
        <Col>
          <div>
            <img src={Tick} alt="tick" className="m-2" />
            <span>No restrictions for the OS</span>
          </div>
          <div>
            <img src={Tick} alt="tick" className="m-2" />
            <span>Test newly installed programs</span>
          </div>
        </Col>
        <Col>
          <div>
            <img src={Tick} alt="tick" className="m-2" />
            <span>Use all functions of the system</span>
          </div>
          <div>
            <img src={Tick} alt="tick" className="m-2" />
            <span>Delete and formal the file system</span>
          </div>
        </Col>
      </Row>
    </div>
    <Row className="d-flex-row justify-content-around mt-5 alphabets">
      <div>
        <h5>JUMP TO</h5>
        <a href="/">#</a>
        <a href="/">A</a>
        <a href="/">B</a>
        <a href="/">C</a>
        <a href="/">D</a>
        <a href="/">E</a>
        <a href="/">F</a>
        <a href="/">G</a>
        <a href="/">H</a>
        <a href="/">I</a>
        <a href="/">J</a>
        <a href="/">K</a>
        <a href="/">L</a>
        <a href="/">M</a>
        <a href="/">N</a>
        <a href="/">O</a>
        <a href="/">P</a>
        <a href="/">Q</a>
        <a href="/">R</a>
        <a href="/">S</a>
        <a href="/">T</a>
        <a href="/">U</a>
        <a href="/">V</a>
        <a href="/">W</a>
        <a href="/">X</a>
        <a href="/">Y</a>
        <a href="/">Z</a>
      </div>
    </Row>
  </>
);

export default LandingPage;
