import axios from "axios";
import Prescription from "../prescription.json";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "http://10.41.9.77:1111";
// const ENVIRONMENT = 'DEV';
const ENVIRONMENT = "PROD";

const api = {
    prescription: prescriptionNumber => {
        return ENVIRONMENT === "DEV"
            ? new Promise((res, rej) => res(Prescription))
            : axios.get(
                  `${BASE_URL}/api/v1/validate_prescription/${prescriptionNumber}`
              );
    },

    deleteRedundant: (prescriptionId, medId) =>
        axios.delete(
            `${BASE_URL}/api/v1/prescription/${prescriptionId}/${medId}`
        )
};

export default api;
