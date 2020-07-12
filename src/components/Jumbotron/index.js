import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid bg-success">
            <div className="container">
                <h1 className="display-4 text-center text-white" id="employeeHeader">All The Employees</h1>
            </div>
        </div>
    );
}

export default Jumbotron;