import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Message, Icon } from 'semantic-ui-react'
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = `http://localhost:${process.env.PORT || 4321}/api`;

axios.get('/data/calendar')
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Message icon>
          <Icon name='circle notched' loading />
          <Message.Content>
            <Message.Header>Just one second</Message.Header>
          </Message.Content>
        </Message>
      </div>
    );
  }
}

export default App;
