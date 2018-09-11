import React from 'react';

import './SideDrawer.css';

export const SideDrawer = ({ show }) => {
  let classNames = 'side-drawer';
  if (show) {
    classNames = 'side-drawer open';
  }

  return (
    <aside className={classNames}>
      <ul>
        <li>
          <a href="/">Link 1</a>
        </li>
        <li>
          <a href="/">Link 2</a>
        </li>
      </ul>
    </aside>
  );
};
