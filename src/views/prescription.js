import React from "react";
import api from "../api";
import ActiveButton from "../components/activeButton";
import ResultsButton from "../components/resultsButton";

class Prescription extends React.Component {
    state = { expected: [], verified: [], redundant: [] };

    componentDidMount() {
        this.results();
    }

    results = () => {
        api.prescription().then(res => {
            if (res.success) {
                this.setState({
                    expected: res.data.expected,
                    verified: res.data.verified,
                    redundant: res.data.redundant
                });
            }
        });
    };

    render() {
        const { match } = this.props;
        const { expected, redundant, verified } = this.state;

        if (!expected.length && !redundant.length && !verified.length)
            return null;

        return (
            <div className="prescription">
                {!!expected.length && (
                    <React.Fragment>
                        <h1>Expected Medication</h1>
                        <div className="prescription-container">
                            <ul className="list-group expected">
                                {expected.map(med => {
                                    return (
                                        <li className="list-group-item list-group-item-primary">
                                            <span>
                                                {" "}
                                                <b>NAME:</b>{" "}
                                                {med.medication.name}
                                            </span>
                                            <span>
                                                {" "}
                                                <b>STRENGTH:</b>{" "}
                                                {med.medication.strength}
                                            </span>
                                            <span>
                                                <b>QUANTITY:</b>{" "}
                                                {med.medication.quantity}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </React.Fragment>
                )}
                {!!verified.length && (
                    <React.Fragment>
                        <h1>Verified Medication</h1>
                        <div className="prescription-container">
                            <ul className="list-group verified">
                                {verified.map(med => {
                                    return (
                                        <li className="list-group-item list-group-item-success">
                                            <span>
                                                {" "}
                                                <b>NAME:</b>{" "}
                                                {med.medication.name}
                                            </span>
                                            <span>
                                                {" "}
                                                <b>STRENGTH:</b>{" "}
                                                {med.medication.strength}
                                            </span>
                                            <span>
                                                <b>QUANTITY:</b>{" "}
                                                {med.medication.quantity}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </React.Fragment>
                )}
                {!!redundant.length && (
                    <React.Fragment>
                        <h1>Incorrectly Scanned Medication</h1>
                        <div className="prescription-container">
                            <ul className="list-group redundant">
                                {redundant.map(med => {
                                    return (
                                        <li className="list-group-item list-group-item-danger">
                                            <div className="medications">
                                                <span>
                                                    {" "}
                                                    <b>NAME:</b>{" "}
                                                    {med.medication.name}
                                                </span>
                                                <span>
                                                    {" "}
                                                    <b>STRENGTH:</b>{" "}
                                                    {med.medication.strength}
                                                </span>
                                                <span>
                                                    <b>QUANTITY:</b>{" "}
                                                    {med.medication.quantity}
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                            >
                                                remove
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </React.Fragment>
                )}
                <div className="scan-results-container">
                    <ResultsButton refresh={this.results} />
                </div>
                <div className="approval-container">
                    <ActiveButton
                        isValid={!expected.length && !redundant.length}
                    />
                </div>
            </div>
        );
    }
}

export default Prescription;
//
// <li className="list-group-item">Dapibus ac facilisis in</li>
//
// <li className="list-group-item list-group-item-primary">
//     A simple primary list group item
// </li>
// <li className="list-group-item list-group-item-secondary">
//     A simple secondary list group item
// </li>
// <li className="list-group-item list-group-item-success">
//     A simple success list group item
// </li>
// <li className="list-group-item list-group-item-danger">
//     A simple danger list group item
// </li>
// <li className="list-group-item list-group-item-warning">
//     A simple warning list group item
// </li>
// <li className="list-group-item list-group-item-info">
//     A simple info list group item
// </li>
// <li className="list-group-item list-group-item-light">
//     A simple light list group item
// </li>
// <li className="list-group-item list-group-item-dark">
//     A simple dark list group item
// </li>
