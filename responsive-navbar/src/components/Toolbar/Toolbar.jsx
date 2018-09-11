import React from 'react';
import { DrawerToggleButton } from '../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

export const Toolbar = ({ handleSideDrawer }) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton onClick={handleSideDrawer} />
      </div>
      <div className="toolbar__logo">
        <a href="/">LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <a href="/">Link 1</a>
          </li>
          <li>
            <a href="/">Link 2</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
