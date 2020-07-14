// WASN'T ABLE TO MAKE THE SEARCH FIELD WORD; PSEUDOCODE IS BELOW IN COMMENTED SECTION
import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import SearchForm from './components/SearchForm';
import EmployeeTable from './components/EmployeeTable';
import API from "./utils/API";


// Set the state
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      filteredEmployees: []
    };
  }

  // Pulling user data from randomuser API
  componentDidMount() {
    API.getEmployees().then((res) =>
      this.setState({
        employees: res.data.results,
        filteredEmployees: res.data.results,
      })
    );
  }
  handleInputChange = event => {
    event.preventDefault();
    const employees = this.state.employees;
    const input = event.target.value.toLowerCase();
    console.log(input);
    const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(input) > -1)
    this.setState({
      filteredEmployees: filteredEmployees
    });
  };

  // Components that are rendered
  render() {
    return (
      <div>
        <Jumbotron />
        <SearchForm handleInputChange={this.handleInputChange} />
        <EmployeeTable employees={this.state.filteredEmployees} />
      </div>
    );
  }
}

export default App;
