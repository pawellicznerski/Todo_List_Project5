import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SortableSimple from './components/IndexSortable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SortableSimple></SortableSimple>
      </div>
    );
  }
}

export default App;
