import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Visual Studio Code Extension Download Count</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to="/history/formulahendry.code-runner">
                <NavItem eventKey={2}>History</NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to="/leaderboard">
                <NavItem eventKey={3}>Leaderboard</NavItem>
              </IndexLinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
