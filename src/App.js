import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Prescription from "./views/prescription";
import Validated from "./views/validated";
import PrescriptionNumber from "./views/prescriptionNumber";
// a change
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

//todo send delete redundant meds req to server
//todo validate prescription nr, if success false. show error message - done
//todo display results on prescription page - done
//todo create a results button to be pressed when you want to see outcome of scan - done
//todo send prescripton number to scanner app - done
//todo hook up approve button to validation - done
