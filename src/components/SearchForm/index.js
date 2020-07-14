import React from "react";
import "./style.css";

function SearchForm({ handleInputChange }) {
    return <div className="container">
        <div className="row justify-content-md-center">
            <form onSubmit={e => { e.preventDefault(); }}
                className="col-md-auto">
                <input className="form-control form-control-lg"
                    onChange={e => handleInputChange(e)}
                    name="search"
                    id="search"
                    type="text"
                    placeholder="Enter employee name">
                </input>
            </form>
        </div>
    </div>
}

export default SearchForm;