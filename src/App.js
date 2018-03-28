import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects:[
      {
        title: '1st react',
        category: 'react1'
      },
      {
        title: '2nd react',
        category: 'react2'
      },
      {
        title: '3rd react',
        category: 'react3'
      }
    ]});
  }

  render() {
    return (
      <div className="App">
        My 1st
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
