// src/components/InspectButton.js
import React from 'react';
import './InspectButton.css';

const InspectButton = () => {
  const handleClick = () => {
    alert('Inspect button clicked!');
  };

  return (
    <button className="inspect-button" onClick={handleClick}>
      Inspect
    </button>
  );
};

export default InspectButton;
