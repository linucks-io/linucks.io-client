import React from 'react';
import {
  Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';
import './App.scss';
import { Container, Button, Navbar } from 'react-bootstrap';
import LandingPage from './pages/LandingPage/LandingPage';
import DistroPage from './pages/DistroPage/DistroPage';

import Logo from './assets/logo3.png';

function App() {
  return (
    <>
      <div className="d-flex-row justify-content-around p-4 m-0 navbar">
        <img src={Logo} alt="logo" className="logo" />
        <a href="#distros">
          <Button>Test me</Button>
        </a>
      </div>
      <Router basename={process.env.PUBLIC_URL}>
        <Container fluid className="App">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/distro/:distroName">
              <DistroPage />
            </Route>
          </Switch>
        </Container>
      </Router>
      <Navbar className="bottom-bar" />
    </>
  );
}

export default App;
