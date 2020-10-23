import React from 'react';
import ReactDOM from 'react-dom';
// import charityList from './charityList';
// import exampleBundle from '../exampleBundle.js';

const Promise = require('bluebird');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundle: this.props.exampleBundle,
    }
  }

  componentDidMount() {
    // default state is 3x of the same charity, repeating
    // mounted state will retrieve bundle 1 (for mockup)
    this.handleBundle(1);
  }

  handleBundle(id = 1) {

    axios.get('http://localhost:3987/charity/{id}/names')
      .then((result) => {
        this.setState({ bundle: result });
        console.log('Successfully updated the bundees!');
      })
      .catch((err) => {
        console.log(`Error in AJAX request for server to retrieve from database: ${err}`);
    })

  }

  // mapCharities() {

  //   this.state.bundle.map((bundle) => {
  //     console.log(bundle);
  //     let charities =
  //   });

  //  {this.state.bundles.map((bundle) => {
  //    <CharityList charity={this.state.bundle}></CharityList>
  //       return (
  //
  //      )
  //    }
  //  }

  // A row of 3 charities, mapped according to description (will later be just images)

  render() {
    return (
      <div>
        This is a test
      </div>
    );
  }

};

/* bundle={exampleBundle} */
ReactDOM.render(<App />, document.getElementById('charity'));