import React from "react";
import { withRouter } from 'react-router-dom';




class PrescriptionNumber extends React.Component {
    state= { prescriptionNumber:''};
    pushState = (param)=> {
        const {history} = this.props;
        history.push('/validated');
            console.log('=======');
            console.log('param', param);
            console.log('=======');

    };

    updatePrescriptionNumber =({target}) => {
        this.setState({prescriptionNumber:target.value});
    };

    render(){
        return (
            <div className="prescription-number">
                <div className="jumbotron">
                    <h1 className="display-4">Prescription Validator</h1>
                    <hr className="my-4"/>
                    <p className="lead">Please enter your prescription number below:</p>
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
        );
    }

}

export default withRouter(PrescriptionNumber);
