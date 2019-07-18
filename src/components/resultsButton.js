import React from "react";

function ResultsButton() {
    return (
        <button className="btn btn-info btn-lg btn-block" onClick={() => this.props.refresh()}>Refresh Results</button>
    );
}

export default ResultsButton;
