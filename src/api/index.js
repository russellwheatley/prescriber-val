import axios from "axios";
import Prescription from '../prescription.json';
import PrescriptionResults from '../prescriptionResults.json';


const BASE_URL = "http://localhost:3000";

const api = {
    prescription: (prescriptionNumber) =>process.env.NODE_ENV === 'development'? new Promise((res, rej)=> res(Prescription)) :  axios.get(`${BASE_URL}/prescription/${prescriptionNumber}`),
    prescriptionResults: prescriptionNumber =>
        process.env.NODE_ENV === 'development'? new Promise((res, rej)=> res(PrescriptionResults)) : axios.get(`${BASE_URL}/prescription-results/${prescriptionNumber}`)
};

export default api;
