import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Container } from 'react-bootstrap';
import LandingPage from './pages/LandingPage/LandingPage';
import DistroPage from './pages/DistroPage/DistroPage';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>

  );
}

export default App;
