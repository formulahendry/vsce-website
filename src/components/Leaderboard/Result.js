import React, { Component } from 'react';
import { Link } from 'react-router'
import { Col, Row } from 'react-bootstrap';
import $ from 'jquery';
import './Result.css';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.getLeaderboardData()
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.refreshResult === true && prevProps.timeRange !== this.props.timeRange) {
      this.getLeaderboardData();
    }
  }

  getLeaderboardData() {
    $.getJSON(`https://vscedownloadcountwebapi.azurewebsites.net/leaderboard?timeRange=${this.props.timeRange}`).done((data) => {
      this.setState({
        result: data
      });
    });
  }

  render() {
    let items = [];
    if (this.state.result) {
      this.state.result.forEach(function (item, index, array) {
        items.push(
          <Row key={index} className="leaderboard-item">
            <Col sm={3} smOffset={2} xs={4}>
              <Link to={`/history/${item.ItemName}`} className="item-name">{item.ItemName}</Link>
            </Col>
            <Col sm={2} xs={4}>
              {index + 1}
            </Col>
            <Col sm={2} xs={4}>
              {item.DownloadCount}
            </Col>
          </Row>
        );
      });
    }
    return (
      <div className="Result">
        <Row className="Header">
          <Col sm={3} smOffset={2} xs={4}>
            Extension
          </Col>
          <Col sm={2} xs={4}>
            Ranking
          </Col>
          <Col sm={2} xs={4}>
            DownloadCount
          </Col>
        </Row> 
        {items}
      </div>
    );
  }
}

export default Result;
