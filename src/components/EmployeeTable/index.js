import React from 'react'
import "./style.css";

function EmployeeTable({ employees }) {
    return (
        <table className="table table-striped table-dark">
            <thead className="text-center" id="headerText">
                <tr>
                    <th>Headshot</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody className="text-center" id="bodyText">
                {employees.length > 0 ? (employees.map((employee, index) => {
                    return (
                        <tr key={index}>
                            <td><img src={employee.picture.medium} alt={employee.name.last} /></td>
                            <td>{employee.name.first} {employee.name.last}</td>
                            <td>{employee.location.city}, {employee.location.state}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                        </tr>
                    );
                })
                ) : (
                        <tr>
                            <td colSpan="5">Waiting to load employees ...</td>
                        </tr>
                    )};
        </tbody>
        </table>
    );
}

export default EmployeeTable;
