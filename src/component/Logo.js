import React from 'react';

const Logo = ({ fontSize = '3.5em', center }) => (
  <h1 className="logo" style={{  fontSize, textAlign: center ? 'center' : null }}>
    Quizzard!
  </h1>
);

export default Logo;
