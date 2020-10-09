// 1. Component to render sample data
// 2. Refactor to use data from route calls

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bundles: []
    }
  }

  componentDidMount() {
    // this.setState to update bundles from external server
  }

  render() {
    return (
      <div>
      TBD: Each route will be exemplified here for demonstration purposes.
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));