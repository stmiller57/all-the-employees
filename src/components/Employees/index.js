import React from 'react'

function Employees(props) {
    return (
        <div className="container-fluid">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map((employee) => (
                        <tr key={employee.search}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.email}</td>
                            <td>{employee.cell}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Employees;
