import React, { Component } from 'react';
import { Link } from 'react-router'
import extensions from '../../assets/extensions.json'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Extensions List</h1>
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
