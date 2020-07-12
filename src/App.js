import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import SearchForm from './components/SearchForm';
import EmployeeTable from './components/EmployeeTable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <SearchForm />
        <EmployeeTable />

      </div>
    );
  }
}

export default App;
