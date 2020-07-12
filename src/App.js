import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import SearchForm from './components/SearchForm';
import EmployeeTable from './components/EmployeeTable';
import API from "./utils/API";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    API.getEmployees().then((res) =>
      this.setState({
        employees: res.data.results,
      })
    );
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <SearchForm />
        <EmployeeTable employees={this.state.employees} />

      </div>
    );
  }
}

export default App;
