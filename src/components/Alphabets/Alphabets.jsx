import React from 'react';
import './Alphabets.scss';

function makeAlphabet() {
  const rows = [];

  for (let i = 65; i < 91; i += 1) {
    rows.push(
      <a key={i} href="/">{String.fromCharCode(i)}</a>,
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
