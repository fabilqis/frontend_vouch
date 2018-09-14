import axios from 'axios'

const request = axios.create({
    baseURL: 'http://backendvouch.herokuapp.com/',
    timeout: 5000
})

export default request