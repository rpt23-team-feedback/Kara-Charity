import React, { Component } from 'react';
import charityList from './charityList';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundles: this.props.exampleBundle
    }
  }

  componentDidMount() {
    this.handleBundles();
  }

  handleBundles() {
    $.ajax({
      url: 'http://localhost:3987/bundles/all',
      type: 'GET',
      data: {},
    }).then((bundees) => {
      this.setState({
        bundles: bundees
      });
      console.log('Successfully updated the bundees!');
    }).catch((err) => {
      console.log(`Error in AJAX request for server to retrieve from database: ${err}`);
    })
  }

  mapCharities() {
    this.state.bundles.map((bundle) => {
      console.log(bundle);

    })
  }

  // Current goal - render the charity names/descriptions here
  // Currently only lists the charityIds associated with a bundle
  render() {
    console.log(this.state.bundles);
    return (
      <div>
        {/* {this.state.bundles.map((bundle) => {
          return (

          )
        } */ this.state.bundles
        }
      )
      </div>
  }
}