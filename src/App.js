import React, { Component } from 'react';
import './App.css';
import FilteredTable from './Components/FilteredTable';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredTable store = {this.props.store}/>
      </div>
    );
  }
}

export default App;
