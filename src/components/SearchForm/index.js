import React from "react";
import "./style.css";

function SearchForm(props) {
    return <div className="container">
        <div className="row justify-content-md-center">
            <form className="col-md-auto">
                <input className="form-control form-control-lg"
                    onChange={props.handleInputChange}
                    value={props.value}
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