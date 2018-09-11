import React from 'react';

import './DrawerToggleButton.css';

export const DrawerToggleButton = ({ onClick }) => (
  <button className="toggle-button" onClick={onClick}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);
