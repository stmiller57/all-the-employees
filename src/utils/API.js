import axios from "axios";

// Exports an object of 50 random users for employee list

export default {
    getRandomEmployees: () => {
        return axios.get("https://randomuser.me/api/?results=50&inc=name,registered&nat=fr");
    }
};