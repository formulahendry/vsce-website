import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Chart from './Chart';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: props.params.itemName,
      dateInterval: "Hour",
      intervalCount: 10,
      refreshChart: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(itemName, dateInterval, intervalCount, refreshChart) {
    this.setState({
      itemName: itemName,
      dateInterval: dateInterval,
      intervalCount: intervalCount,
      refreshChart: refreshChart
    });
  }

  render() {
    return (
      <div className="History">
        <SearchBar 
          itemName={this.state.itemName}
          dateInterval={this.state.dateInterval}
          intervalCount={this.state.intervalCount}
          onUserInput={this.handleUserInput}
        />
        <Chart 
          itemName={this.state.itemName}
          dateInterval={this.state.dateInterval}
          intervalCount={this.state.intervalCount}
          refreshChart={this.state.refreshChart}
        />
      </div>
    );
  }
}

export default History;
