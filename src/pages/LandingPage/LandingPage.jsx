import React from 'react';
import './LandingPage.scss';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Tick from '../../assets/icons/tick.svg';
import Alphabets from '../../components/Alphabets/Alphabets';
import SearchBox from '../../components/SearchBox/SearchBox';
// import Spacer from '../../components/Spacer/Spacer';
import AlphabetCard from '../../components/AlphabetCard/AlphabetCard';
import distroMap from '../../distro';
import ArchLinux from '../../assets/arch.png';

function createAlphabetCard(alphabet) {
  if (distroMap[alphabet].length === 0) {
    return <></>;
  }
  return <AlphabetCard alphabet={alphabet} distros={distroMap[alphabet]} />;
}

const LandingPage = () => (
  <>
    <Row className="d-flex-row justify-content-around">
      <div>
        <div>
          <div>
            <div className="w-50" />
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
            <p className="paragraph">
              With
              {' '}
              {' '}
              <b>linucks.io</b>
              {' '}
              you can yuck out all the bad distros
            </p>
          </div>
        </div>
      </div>
    </Row>
    <Row className="d-flex parent justify-content-center">
      <Tilt className="Tilt" options={{ max: 25, easing: 'cubic-bezier(.17,.67,.74,.76)' }}>
        <div className="parent-div h-100 w-100">
          <div className="glow" />
          <img src={ArchLinux} alt="" className="arch" />
        </div>

      </Tilt>

    </Row>
    <Row className="d-flex-row justify-content-around text-center">
      <div>
        <h1 className="header-1">Choose from a variety of distros</h1>
        <h1 className="header-1">and test it directly</h1>
      </div>
    </Row>
    <div className="d-flex w-100 justify-content-around">
      <Row className="d-flex-row text-center pt-5 features">
        <Col>
          <div className="mt-3">
            <img src={Tick} alt="tick" className="mr-2 tick" />
            <span>No restrictions for the OS</span>
          </div>
          <div className="mt-3">
            <img src={Tick} alt="tick" className="mr-2 tick" />
            <span>Test newly installed programs</span>
          </div>
        </Col>
        <Col>
          <div className="mt-3">
            <img src={Tick} alt="tick" className="mr-2 tick" />
            <span>Use all functions of the system</span>
          </div>
          <div className="mt-3">
            <img src={Tick} alt="tick" className="mr-2 tick" />
            <span>Delete and formal the file system</span>
          </div>
        </Col>
      </Row>
    </div>
    <Row className="d-flex-row justify-content-around mt-5 mr-0 ml-0 w-100">
      <div>
        <Alphabets />
        <br />
        <a className="reset" href="/">Reset applied filters</a>
      </div>
      <SearchBox />
    </Row>
    <div id="distros" className="d-flex mt-5 justify-content-center">
      <Row className="w-75">
        {Object.keys(distroMap).map(createAlphabetCard)}
      </Row>
    </div>
  </>
);

export default LandingPage;
