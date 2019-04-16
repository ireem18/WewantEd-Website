import React, { Component } from 'react';

import Signup from './Signup';
import Login from './Login';
import Overlay from './Overlay';

export default class Panel extends Component {
  state = {
    rightPanelActive: false
  };

  handleButtonClick = () => {
    const { rightPanelActive } = this.state;
    this.setState({
      rightPanelActive: !rightPanelActive
    });
  };

  render() {
    const { rightPanelActive } = this.state;
    return (
      <div
        className={
          rightPanelActive ? 'container right-panel-active' : 'container'
        }
        id="container"
      >
        <Signup onButtonClick={this.handleButtonClick}/>
        <Login onButtonClick={this.handleButtonClick} />
        <Overlay onButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}
