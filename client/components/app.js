import React from 'react';
import ReactDOM from 'react-dom';
import charityList from './charityList';
import exampleBundle from '../exampleBundle.js';

const Promise = require('bluebird');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundle: this.props.exampleBundle,
      charities: []
    }
  }

  componentDidMount() {
    // mounted state mocks up bundle 1
    this.handleBundle();
  }

  handleBundle(id = 1) {
    // default state is 3x of the same charity
    axios.get(`http://localhost:3987/charity/${id}/names`)
      .then((result) => {
        this.setState({ bundle: result });
        console.log('Bundle updated from server!');
      })
      .then(() => {
        this.mapCharities();
      })
      .catch((err) => {
        console.log(`Error in AJAX request for server to retrieve from database: ${err}`);
    });

  }

  mapCharities() {
    // setState will have updated the bundle
    let bundleId = this.state.bundle;
    let eachCharity = [];
    for (var key in this.state.bundle) {
      // using 0 for undefined charity2 / charity3
      if ((key !== "id") && (bundle[key] !== 0)) {
        eachCharity.push(bundle[key]);
      }
    }
    this.setState({
      bundle: bundleId,
      charities: eachCharity
    });
    console.log(`Mapped charities: ${this.state.charities}`);
  }

    // 3 charities, mapped (to do: images)
  render() {
    return (
      <div>
        Testing bundle: {this.state.bundle}
        {this.state.charities.map((oneCharity) => {
          <charityList charity={oneCharity} />
        })}
      </div>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('charity'));
