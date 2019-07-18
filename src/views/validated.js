import React from "react";
import { withRouter } from "react-router-dom";

function Validated({ history }) {
    return (
        <div className="validated">
            <div className="validated-container jumbotron">
                <div className="validated-contents text-center">
                    <h1 className="text-success display-4">Approved!</h1>
                    <hr className="hr-4"></hr>
                    <h5 className="text-body">
                        {" "}
                        The prescription can now be passed on to the Pharmacist{" "}
                    </h5>
                    <br />
                    <button
                        onClick={() => history.push("/")}
                        className="btn btn-primary text-white"
                    >
                        New prescription
                    </button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Validated);
