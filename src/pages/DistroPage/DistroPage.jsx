/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { VncScreen } from 'react-vnc';
import './DistroPage.scss';

const { REACT_APP_BACKEND_URL, REACT_APP_FALLBACK_URL } = process.env;

const DistroPage = () => {
  const { distroName } = useParams();
  const [URL, setUrl] = useState('');

  const getURL = async () => {
    try {
      const response = await fetch(`${REACT_APP_BACKEND_URL}/provision`, {
        method: 'POST',
        body: JSON.stringify({
          distroName,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const { url, success } = (await response.json());

      if (success) {
        if (url.includes('viewOnly=true')) {
          const newUrl = url.split('?')[0];
          setUrl(`ws://${newUrl}`);
          return;
        }
        setUrl(`ws://${url}/websockify`);
      }
    } catch {
      console.log(REACT_APP_FALLBACK_URL);
      console.log('ran');
      // setUrl(REACT_APP_FALLBACK_URL);
    }
  };
  useEffect(() => {
    getURL();
  }, []);

  return (
    <div>
      <Row className="d-flex justify-content-center p-5">
        <h1>{distroName}</h1>
      </Row>
      <Row>
        <Col className="text-left p-5">
          <div className="d-flex">
            <h2 className="pros ml-3">Pros</h2>
          </div>
          <li>Ease of updating the system and the applications installed on it.</li>
          <li>
            Variety of high quality applications available,
            mostly open source and free software.
          </li>
          <li>
            Great security, which allows tranquility in the use of professional projects
            , even the most sensitive ones.
          </li>
          <li>
            Thousands of sites on the Internet with tutorials,
            problem solving (even the most unusual and specific) and technical analysis
            that turn intensive use into a truly fluid and pleasurable experience.
          </li>
          <br />
          <div className="d-flex">
            <h2 className="cons ml-3">Cons</h2>
          </div>
          <li>More agreements with large companies and governments to publicize the system.</li>
          <li>
            More hardware options (mainly notebooks and smartphones)
            with the system pre-installed at the factory.
          </li>
          <li>
            Greater support for anti-software piracy laws.
          </li>
        </Col>
        <Col>
          {URL && (
          <VncScreen
            url={URL}
            scaleViewport
            background="#000000"
            style={{
              width: '75vw',
              height: '75vh',
            }}
          />
          ) }

        </Col>

      </Row>
    </div>

  );
};

export default DistroPage;
