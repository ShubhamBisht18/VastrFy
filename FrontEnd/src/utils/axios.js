import axios from 'axios'

const instance  = axios.create({
    baseURL: 'https://vastrfy.onrender.com/api',
    withCredentials: true
})

export default instance