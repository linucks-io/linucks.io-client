import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { Container } from 'react-bootstrap';
import LandingPage from './pages/LandingPage/LandingPage';
import DistroPage from './pages/DistroPage/DistroPage';

function App() {
  return (
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

  );
}

export default App;
