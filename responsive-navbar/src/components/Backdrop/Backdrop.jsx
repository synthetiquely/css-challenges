import React from 'react';

import './Backdrop.css';

export const Backdrop = ({ handleBackdropClick }) => (
  <div onClick={handleBackdropClick} className="backdrop" />
);
