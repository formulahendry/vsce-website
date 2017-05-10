import React, { Component } from 'react';
import Extension from './Extension';
import extensions from '../../assets/extensions.json'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
    this.updateLoadStatus = this.updateLoadStatus.bind(this);
  }

  updateLoadStatus(isLoading) {
    this.setState({
      isLoading: isLoading
    })
  }

  render() {
    return (
      <div className="Home">
        <h1>Popular Extensions</h1>
        {(navigator.userAgent.indexOf('Code/') === -1) &&
          <p>
            Not see your extension? Send a PR <a href="https://github.com/formulahendry/vsce-website/blob/master/src/assets/extensions.json">here</a>, or submit a <a href="https://github.com/formulahendry/vsce-website/issues">request</a>.
          </p>
        }
        {this.state.isLoading &&
          <div className="loader"></div>
        }
        {extensions.map((extension, index) =>
          <Extension itemName={extension} key={index} updateLoadStatus={this.updateLoadStatus}/>  
        )}
      </div>
    );
  }
}

export default Home;
