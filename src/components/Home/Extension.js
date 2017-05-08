import React, { Component } from 'react';
import { Link } from 'react-router'
import { Col, Glyphicon } from 'react-bootstrap';
import $ from 'jquery';
import './Extension.css';

class Extension extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extensionData: null
    };
    this.getExtensionData()
  }

  getExtensionData() {
    $.ajax({
      url: 'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery',
      type: 'post',
      headers: {
        'Accept': 'application/json;api-version=3.0-preview.1',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        "filters": [
          {
            "criteria": [
              {
                "filterType": 7,
                "value": this.props.itemName
              },
            ],
          },
        ],
        "flags": 262
      }),
      dataType: 'json'
    })
      .done((data) => {
        this.setState({
          extensionData: data
        });
        this.props.updateLoadStatus(false);
      });
  }

  render() {
    let extensionData;
    if (this.state.extensionData) {
      let install = 0;
      let averagerating = 0;
      let statistics = this.state.extensionData.results[0].extensions[0].statistics
      for (let index in statistics) {
        if (statistics[index].statisticName === 'install') {
          install = statistics[index].value;
        }
        if (statistics[index].statisticName === 'averagerating') {
          averagerating = statistics[index].value.toFixed(2);
        }
      }

      let iconUrl = null;
      let files = this.state.extensionData.results[0].extensions[0].versions[0].files
      for (let index in files) {
        if (files[index].assetType === 'Microsoft.VisualStudio.Services.Icons.Default') {
          iconUrl = files[index].source;
          break;
        }
      }
      if (!iconUrl) {
        iconUrl = 'https://cdn.vsassets.io/v/20161006T044507/_content/Header/default_icon.png';
      }

      extensionData = 
        <Col sm={2} xs={4} className="col">
          <div className="extension-card">
            <Link to={`/history/${this.props.itemName}`} className="extension-link">
              <div className="extension-icon-container">
                <img src={iconUrl} alt="icon"/>
              </div>
              <div className="extension-display-name">{this.state.extensionData.results[0].extensions[0].displayName}</div>
              <div className="extension-publisher-name">{this.state.extensionData.results[0].extensions[0].publisher.displayName}</div>
              <div className="extension-install"><Glyphicon glyph="cloud-download" /><span className="install-count">{install}</span></div>
              <div className="extension-rating"><Glyphicon glyph="star" /><span className="average-rating">{averagerating}</span></div>
            </Link>
          </div>  
        </Col>
    } 

    return (
      <div className="Extension">      
          {extensionData}    
      </div>
    );
  }
}

export default Extension;
