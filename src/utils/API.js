import axios from "axios";

// Exports an object of random users to build employee list

export default {
    getEmployees: () => {
        return axios.get("https://randomuser.me/api/?results=50&nat=us");
    }
};