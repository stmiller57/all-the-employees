import axios from "axios";

// Exports an object of 50 random users to build employee list

export default {
    getUsers: () => {
        return axios.get("https://randomuser.me/api/?results=50&inc=name,registered&nat=us");
    }
};