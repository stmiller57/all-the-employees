import React from "react";
import "./style.css";

function SearchForm(props) {
    return <div className="container">
        <div className="row justify-content-md-center">
            <form className="col-md-auto">
                <input className="form-control form-control-lg"
                    value={props.search}
                    onChange={props.handleInputChange}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Enter employee name">
                </input>
            </form>
        </div>
    </div>
}

export default SearchForm;