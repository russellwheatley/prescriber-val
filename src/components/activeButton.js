import React from "react";
import { withRouter } from "react-router-dom";
import api from "../api";

function ActiveButton({ isValid, history }) {
    const validstyle = isValid
        ? "btn btn-primary btn-lg btn-block"
        : "btn btn-secondary btn-lg btn-block disabled";
    return (
        <button
            onClick={async () => {
                await api.cleanUp();
                history.push("/validated");
            }}
            className={[validstyle]}
        >
            {" "}
            {isValid ? "APPROVED" : "NOT APPROVED"}
        </button>
    );
}

export default withRouter(ActiveButton);
