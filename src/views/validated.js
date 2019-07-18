import React from "react";
import { withRouter } from "react-router-dom";

function Validated({ history }) {
    return (
        <div className="validated">
            <h1>You've now validated the medication</h1>
            <button
                className="btn btn-primary btn-lg btn-block"
                onClick={() => history.push("/")}
            >
                New Prescription
            </button>
        </div>
    );
}

export default withRouter(Validated);
