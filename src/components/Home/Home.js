import React, { Component } from 'react';
import { Link } from 'react-router'
import extensions from '../../assets/extensions.json'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Extensions List</h1>
        <p>
          Not see your extension? Send a PR <a href="https://github.com/formulahendry/vsce-website/blob/master/src/assets/extensions.json">here</a>, or submit a <a href="https://github.com/formulahendry/vsce-website/issues">request</a>.
        </p>
        {extensions.map((extension, index) =>
          <div key={extension}>
            <Link to={`/history/${extension}`}>{extension}</Link>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
