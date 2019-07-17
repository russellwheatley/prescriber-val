import React from "react";
import logo from "./logo.svg";
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
