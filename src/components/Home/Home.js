import React, { Component } from 'react';
import Extension from './Extension';
import extensions from '../../assets/extensions.json'

class Home extends Component {
  constructor() {
    super();
    this.aaa = ["formulahendry.code-runner","formulahendry.auto-close-tag"];
  }

  render() {
    return (
      <div className="Home">
        <h1>Extensions List</h1>
        <p>
          Not see your extension? Send a PR <a href="https://github.com/formulahendry/vsce-website/blob/master/src/assets/extensions.json">here</a>, or submit a <a href="https://github.com/formulahendry/vsce-website/issues">request</a>.
        </p>
        {extensions.map((extension, index) =>
          <Extension itemName={extension} key={index}/>  
        )}
      </div>
    );
  }
}

export default Home;
