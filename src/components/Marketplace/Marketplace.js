import React, { Component } from 'react';
import './Marketplace.css';

class Marketplace extends Component {
  render() {
    return (
      <div className="Marketplace">
        <iframe src="https://marketplace.visualstudio.com/VSCode" height="100%" width="100%"></iframe>
      </div>
    );
  }
}

export default Marketplace;
