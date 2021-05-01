import React from 'react';
import { Link } from 'react-router-dom';
import './Alphabets.scss';

function makeAlphabet() {
  const rows = [];

  for (let i = 65; i < 91; i += 1) {
    rows.push(
      <Link key={i} to="/">{String.fromCharCode(i)}</Link>,
    );
  }
  return rows;
}

const Alphabets = () => (
  <>
    <div className="alphabets">
      <h5>JUMP TO</h5>
      {makeAlphabet()}
    </div>
  </>
);

export default Alphabets;
