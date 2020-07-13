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
    };
  }

  // Pulling user data from randomuser API
  componentDidMount() {
    API.getEmployees().then((res) =>
      this.setState({
        employees: res.data.results,
      })
    );
  }

  // Components that are rendered
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
