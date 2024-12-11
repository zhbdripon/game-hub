import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/', 
    params: {
        key: 'ed43b537e80c49cd97a9afc9352b7c1a'
    }
})