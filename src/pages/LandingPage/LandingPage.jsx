import React from 'react';
import './LandingPage.scss';
import { Button, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/logo3.png';
import Tick from '../../assets/icons/tick.svg';
import Alphabets from '../../components/Alphabets/Alphabets';
import SearchBox from '../../components/SearchBox/SearchBox';
import Spacer from '../../components/Spacer/Spacer';
import AlphabetCard from '../../components/AlphabetCard/AlphabetCard';
import distroMap from '../../distro';

function createAlphabetCard(alphabet) {
  if (distroMap[alphabet].length === 0) {
    return <></>;
  }
  return <AlphabetCard alphabet={alphabet} distros={distroMap[alphabet]} />;
}

const LandingPage = () => (
  <>
    <Row className="d-flex-row justify-content-around p-4 navbar">
      <img src={Logo} alt="logo" className="logo" />
      <Button>Test me</Button>
    </Row>
    <Spacer />
    <Row className="d-flex-row justify-content-around">
      <div>
        <div>
          <h1 className="header">
            Run and test Linux
            <br />
            in your browser
          </h1>
        </div>
        <br />
        <div className="text-center">
          <h5 className="subheader">
            No installations, no long waiting times, its an
            <br />
            operating system in your browser
          </h5>
          <br />
          <p className="paragraph">With linucks.io you can yuck out all the bad distros</p>
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
    <Row className="d-flex-row justify-content-around w-100">
      <div>
        <Alphabets />
        <br />
        <a href="/">Reset applied filters</a>
      </div>
      <SearchBox />
    </Row>
    <div className="d-flex justify-content-center">
      <Row className="w-75">
        {Object.keys(distroMap).map(createAlphabetCard)}
      </Row>
    </div>

  </>
);

export default LandingPage;
