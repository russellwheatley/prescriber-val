import React from "react";
import { withRouter } from "react-router-dom";

function ActiveButton({ isValid, history }) {
    const validstyle = isValid
        ? "btn btn-primary btn-lg btn-block"
        : "btn btn-secondary btn-lg btn-block disabled";
    return (
        <button
            onClick={() => history.push("/validated")}
            className={[validstyle]}
        >
            {" "}
           {isValid ? 'APPROVED': 'NOT APPROVED'}
        </button>
    );
}

export default withRouter(ActiveButton);
