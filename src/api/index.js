import axios from "axios";
import Prescription from "../prescription.json";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "http://10.41.9.77:1111";

const api = {
    prescription: prescriptionNumber => {
        console.log('=======');
        console.log('process.env.NODE_ENV',process.env.NODE_ENV);
        console.log('=======');

        return process.env.NODE_ENV === "development"
            ? new Promise((res, rej) => res(Prescription))
            : axios.get(`${BASE_URL}/prescription/${prescriptionNumber}`);
    },

    deleteRedundant: () => {}
};

export default api;
