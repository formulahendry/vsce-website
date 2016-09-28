import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, Col } from 'react-bootstrap';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({refreshResult = false}) {
    this.props.onUserInput(
      ReactDOM.findDOMNode(this.refs.timeRangeInput).value,
      refreshResult
    );
  }

  render() {
    return (
      <div className="Filter">
        <Form horizontal>
          <FormGroup>
            <Col sm={2} smOffset={5} xs={6} xsOffset={3}>
              <FormControl componentClass="select" placeholder="select" value={this.props.timeRange} onChange={() => { this.handleChange({ refreshResult: true }) } } ref="timeRangeInput">
                <option value="Day">Today</option>
                <option value="Week">This Week</option>
                <option value="Month">This Month</option>
              </FormControl>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Filter;
