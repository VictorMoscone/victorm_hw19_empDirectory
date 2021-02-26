import axios from "axios";

const userApi = "https://randomuser.me/api/?results=20&nat=us"

export default {

    generateUsers: function() {
        return axios.get(userApi)
    }

};