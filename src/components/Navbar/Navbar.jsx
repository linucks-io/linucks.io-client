import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Navbar.scss';
import Logo from '../../assets/logo3.png';

const NavBar = () => (
  <Navbar className="bottom-bar d-flex justify-content-center p-2">
    <a href="/">
      <img src={Logo} alt="logo" className="logo" />
    </a>
  </Navbar>
);

export default NavBar;
