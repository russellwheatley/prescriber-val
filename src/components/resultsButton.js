import React from "react";

function ResultsButton({ refresh }) {
    return (
        <button
            className="btn btn-info btn-lg btn-block"
            onClick={() => refresh()}
        >
            Refresh Results
        </button>
    );
}

export default ResultsButton;
