import React, { Component } from 'react';
import { Toolbar } from './components/Toolbar/Toolbar';
import { SideDrawer } from './components/SideDrawer/SideDrawer';
import { Backdrop } from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpened: false,
  };
  handleSideDrawer = () => {
    this.setState((prevState) => ({
      sideDrawerOpened: !prevState.sideDrawerOpened,
    }));
  };

  handleBackdropClick = () => {
    this.setState({
      sideDrawerOpened: false,
    });
  };

  render() {
    const { sideDrawerOpened } = this.state;
    return (
      <div className="app">
        <Toolbar handleSideDrawer={this.handleSideDrawer} />
        <SideDrawer show={sideDrawerOpened} />
        {sideDrawerOpened ? (
          <Backdrop handleBackdropClick={this.handleBackdropClick} />
        ) : null}

        <main>
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;
