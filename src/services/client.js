import axios from 'axios'

const api = axios.create({

    baseURL: "https://api.github.com/users/" // base da url (se repete)

})


export default api;