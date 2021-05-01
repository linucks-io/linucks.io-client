import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { Container, Button } from 'react-bootstrap';
import LandingPage from './pages/LandingPage/LandingPage';
import DistroPage from './pages/DistroPage/DistroPage';

import Logo from './assets/logo.png';

function App() {
  return (
    <>
      <div className="d-flex-row justify-content-around p-4 m-0 navbar">
        <img src={Logo} alt="logo" className="logo" />
        <Button>Test me</Button>
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
    </>
  );
}

export default App;
