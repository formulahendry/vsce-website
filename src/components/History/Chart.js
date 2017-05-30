import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import $ from 'jquery';
import './Chart.css';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.config = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'column'
      },
      title: {
        text: 'Download Count History'
      },
      xAxis: {
        categories: [],
        title: {
          text: 'DateTime (UTC)'
        }
      },
      yAxis: {
        title: {
          text: 'Download Count'
        }
      },
      series: [{
        name: 'Download Count',
        data: []
      }]
    }
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.getHistoryData();
  }

  componentDidUpdate() {
    if (this.props.refreshChart===true) {
      this.getHistoryData();
    }
  }

  getHistoryData() {
    let count = parseInt(this.props.intervalCount, 10);
    if (count > 100) {
      return;
    }
    $.getJSON(`https://vscedownloadcountwebapi.azurewebsites.net/${this.props.itemName}/download-counts?dateInterval=${this.props.dateInterval}&intervalCount=${count + 1}`).done((data) => {
      if(this.state.isLoading) {
        this.setState({
          isLoading: false
        });
      }
      let result = {
        dateTimes: [],
        downloadCounts: []
      }
      data.forEach(function (item, index, array){
        if (array[index+1]) {
          result.dateTimes.push(item.DateTime);        
          let count = item.DownloadCount-array[index+1].DownloadCount
          result.downloadCounts.push(count)
        }
      });
      let chart = this.refs.chart.getChart();
      if(!chart.series)
      {
        return;
      }      
      chart.series[0].setData(result.downloadCounts);
      chart.xAxis[0].update({
          categories: result.dateTimes
      });  
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading &&
          <div className="loader"></div>
        }
        <a href={`https://marketplace.visualstudio.com/items?itemName=${this.props.itemName}`} target="_blank">View more in Marketplace</a>
        <ReactHighcharts config={this.config} ref="chart" />
      </div>
    );
  }
}

export default Chart;
