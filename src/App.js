import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Prescription from "./views/prescription";
import Validated from "./views/validated";
import PrescriptionNumber from "./views/prescriptionNumber";

function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={PrescriptionNumber} />
                <Route
                    path="/prescription/:prescriptionNumber"
                    component={Prescription}
                />
                <Route path="/validated" component={Validated} />
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;

//todo validate prescription nr, if success false. show error message
//todo display results on prescription page
//todo create a results button to be pressed when you want to see outcome of scan
//todo send prescripton number to scanner app
//todo send delete redundant meds req to server
//todo hook up approve button to validation
