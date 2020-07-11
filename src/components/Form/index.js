import React from "react";
import "./style.css";

function SearchForm() {
    return <div className="container">
        <div className="row justify-content-md-center">
            <form className="col-md-auto">
                <input className="form-control form-control-lg"
                    type="text"
                    placeholder="Enter employee name">
                </input>
            </form>
        </div>
    </div>
}

export default SearchForm;