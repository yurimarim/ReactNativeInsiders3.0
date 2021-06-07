import axios from 'axios';


// key token bitly 82d7a6a36407c44d8e8519a3e4c6d19745529f39

// base url: https://api-ssl.bitly.com/v4/

export const key = '82d7a6a36407c44d8e8519a3e4c6d19745529f39';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,


    }

})

export default api;