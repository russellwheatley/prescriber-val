import React from "react";
import api from '../api';

class Prescription extends React.Component {
    state={prescription:[]};

    componentDidMount(){
        api.prescription().then((res)=> {
            this.setState({prescription:res.data});
        })
    }

    render(){
        const { match } = this.props;
        const { prescription} = this.state;

        if(!prescription.length) return null;

        return (
            <div className="prescription">
                prescription number: {match.params.prescriptionNumber}
                <div className="results-container">
                <ul className="list-group expected">
                    {prescription.map((med) => {
                        return(
                            <li className="list-group-item list-group-item-primary">
                                {med.name}
                            </li>
                        )
                    })}

                </ul>
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
