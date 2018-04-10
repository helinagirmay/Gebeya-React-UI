import React, { Component } from 'react';
import Form from './comp/form';

import Index from './comp/layouts/Dashboard/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index />
      </div>
    );
  }
}

export default App;
