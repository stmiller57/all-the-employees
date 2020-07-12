import axios from "axios";
// Grab random employees from randomuser API
export default {
    getEmployees: () => {
        return axios.get("https://randomuser.me/api/?results=50&nat=us");
    }
};