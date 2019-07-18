import React from "react";
import { withRouter } from "react-router-dom";
import api from "../api";
import io from "socket.io-client";

class PrescriptionNumber extends React.Component {
    state = { prescriptionNumber: "", validPrescription: false, message: "" };

    componentDidMount() {
        const socket = io("http://10.41.9.77:1111");
        socket.on("connection", function(socket) {
            console.log("a user connected");
        });
    }

    pushState = async () => {
        const { history } = this.props;
        api.prescription(this.state.prescriptionNumber)
            .then(async res => {
                await api.cleanUp();
                history.push(`/prescription/${this.state.prescriptionNumber}`);
            })
            .catch(err => {
                this.setState({
                    message: "This is not a valid prescription number"
                });
            });
    };

    updatePrescriptionNumber = ({ target }) => {
        this.setState({ prescriptionNumber: target.value });
    };

    render() {
        const { message } = this.state;
        return (
            <React.Fragment>
                <div className="prescription-number">
                    <div className="jumbotron">
                        <h1 className="display-4">Prescription Validator</h1>
                        <hr className="my-4" />
                        <p className="lead">
                            Please enter your prescription number below:
                        </p>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Prescription Number"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                value={this.state.prescriptionNumber}
                                onChange={this.updatePrescriptionNumber}
                            />
                            <div className="input-group-append">
                                <button
                                    onClick={this.pushState}
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2"
                                >
                                    Enter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="warning-precription-nr">
                    {!!message.length && (
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(PrescriptionNumber);
