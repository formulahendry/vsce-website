import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({refreshChart = false}) {
    if (refreshChart) {
      window.history.pushState('', null, `#/history/${ReactDOM.findDOMNode(this.refs.itemNameInput).value}`);
    }
    this.props.onUserInput(
      ReactDOM.findDOMNode(this.refs.itemNameInput).value,
      ReactDOM.findDOMNode(this.refs.dateIntervalInput).value,
      ReactDOM.findDOMNode(this.refs.intervalCountInput).value,
      refreshChart
    );
  }

  render() {
    return (
      <div className="SearchBar">
        <Form horizontal>
          <FormGroup>
            <Col sm={2} smOffset={4} xs={4} xsOffset={1}>
              <ControlLabel>Time</ControlLabel>
              <FormControl componentClass="select" placeholder="select" value={this.props.dateInterval} onChange={() => { this.handleChange({ refreshChart: true }) } } ref="dateIntervalInput">
                <option value="Hour">Hour</option>
                <option value="Day">Day</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
              </FormControl>
            </Col>
            <Col sm={2} xs={3}>
              <ControlLabel>Count</ControlLabel>
              <FormControl type="number" min="10" max="100" placeholder="Count" value={this.props.intervalCount}
              onChange={() => { this.handleChange({ refreshChart: false }) } } ref="intervalCountInput"/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={4} smOffset={4} xs={7} xsOffset={1}>
              <FormControl type="text" placeholder="Search" value={this.props.itemName} onChange={() => { this.handleChange({ refreshChart: false }) } } ref="itemNameInput"/>
            </Col>
            <Col sm={1} xs={1} id="go">
              <Button onClick={() => { this.handleChange({ refreshChart: true }) } }>Go</Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    );
  }
}

export default SearchBar;
