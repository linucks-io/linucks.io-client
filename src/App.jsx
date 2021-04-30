import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Container } from 'react-bootstrap';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>

  );
}

export default App;
