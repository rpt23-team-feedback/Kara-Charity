import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bundles: []
    }
  }

  render() {
    console.log(this.state.bundles);
    return (
      <div>
      TBD: Each route will be exemplified here for demonstration purposes.
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('charity'));